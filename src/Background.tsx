import { useEffect, useRef } from "react";

// Film grain over a slow drifting light, drawn behind the page in one fragment shader.
const frag = `
precision highp float;
uniform vec2 r;
uniform float t;

float h(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float n(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h(i), h(i + vec2(1, 0)), u.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * n(p); p = p * 2.02 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / r.y;
  float s = t * 0.025;
  vec2 q = vec2(fbm(uv * 1.4 + s), fbm(uv * 1.4 - s + 4.0));
  float light = smoothstep(0.3, 0.8, fbm(uv * 1.1 + q * 1.8 + vec2(s * 0.5, -s)));
  float grain = h(gl_FragCoord.xy + mod(floor(t * 24.0), 97.0) * vec2(13.1, 7.7)) - 0.5;
  vec3 c = vec3(0.071, 0.071, 0.082) + light * vec3(0.08, 0.09, 0.13) + grain * 0.04;
  gl_FragColor = vec4(c, 1.0);
}`;

const vert = "attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }";

export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Phones show only the centre column, so there is nothing to draw behind it.
    if (!matchMedia("(min-width: 768px)").matches) return;
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const prog = gl.createProgram()!;
    for (const [type, src] of [
      [gl.VERTEX_SHADER, vert],
      [gl.FRAGMENT_SHADER, frag],
    ] as const) {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      gl.attachShader(prog, sh);
    }
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, "r");
    const uT = gl.getUniformLocation(prog, "t");

    const draw = (ms: number) => {
      gl.uniform1f(uT, ms / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uR, canvas.width, canvas.height);
      draw(performance.now());
    };
    resize();
    addEventListener("resize", resize);

    let raf = 0;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const loop = (ms: number) => {
        draw(ms);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="fixed inset-0 -z-10 size-full" />;
}
