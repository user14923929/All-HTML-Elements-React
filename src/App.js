import React, { useState, useRef } from "react";

// All-HTML-Elements-React.jsx
// Single-file React component demonstrating a wide set of HTML elements.
// Uses Tailwind utility classes for layout and styling.

export default function AllHtmlElementsDemo() {
  const [textValue, setTextValue] = useState("");
  const [checkboxes, setCheckboxes] = useState({ a: true, b: false });
  const [radio, setRadio] = useState("r1");
  const [range, setRange] = useState(50);
  const [selected, setSelected] = useState("opt2");
  const [fileName, setFileName] = useState(null);
  const fileRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">HTML Elements — React demo</h1>
          <nav aria-label="Главная навигация">
            <ul className="flex gap-3 text-sm">
              <li><a href="#text" className="underline">Text</a></li>
              <li><a href="#media" className="underline">Media</a></li>
              <li><a href="#forms" className="underline">Forms</a></li>
              <li><a href="#semantic" className="underline">Semantic</a></li>
              <li><a href="#others" className="underline">Other</a></li>
            </ul>
          </nav>
        </div>
        <p className="mt-2 text-sm text-slate-600">A compact page demonstrating many common (and some uncommon) HTML elements — wrapped in a React component.</p>
      </header>

      <main className="max-w-6xl mx-auto grid gap-6">
        {/* Text & Inline */}
        <section id="text" className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Text & Inline Elements</h2>
          <article className="prose max-w-none">
            <h3>Headings</h3>
            <h1>H1 — largest heading</h1>
            <h2>H2 — section heading</h2>
            <h3>H3 — subsection</h3>

            <h3>Paragraphs and inline</h3>
            <p>This is a <strong>paragraph</strong> with <em>emphasis</em>, <b>bold</b>, <i>italic</i>, <small>small</small>, <mark>marked</mark>, and an abbreviation <abbr title="Cascading Style Sheets">CSS</abbr>.</p>

            <p>Monospace and code: <code>const x = 1;</code>. Keyboard: <kbd>Ctrl</kbd> + <kbd>C</kbd>. Sample output: <samp>Error: 404</samp>.</p>

            <p>Subscript H<sub>2</sub>O and superscript E = mc<sup>2</sup>. Time element: <time dateTime="2025-09-12">12 Sep 2025</time>.</p>

            <h3>Lists</h3>
            <ul>
              <li>Unordered item</li>
              <li>Another item with a nested ordered list
                <ol>
                  <li>First</li>
                  <li>Second</li>
                </ol>
              </li>
            </ul>

            <h3>Description list</h3>
            <dl>
              <dt>HTML</dt>
              <dd>HyperText Markup Language</dd>
              <dt>React</dt>
              <dd>Library for building UI components</dd>
            </dl>

            <h3>Blockquote & pre</h3>
            <blockquote>"This is a blockquote with a citation." — Someone famous</blockquote>
            <pre><code>{`function hello() {
  return 'world'
}`}</code></pre>
          </article>
        </section>

        {/* Media */}
        <section id="media" className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Media Elements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <figure>
              {/* Inline SVG used instead of external image */}
              <svg role="img" aria-label="Placeholder image" width="320" height="180" viewBox="0 0 320 180" className="border rounded">
                <rect width="100%" height="100%" fill="#e2e8f0"></rect>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#475569">SVG Placeholder</text>
              </svg>
              <figcaption>Figure with inline SVG as an image placeholder.</figcaption>
            </figure>

            <div>
              <h4>Picture element (responsive)</h4>
              <picture>
                <source media="(min-width:800px)" srcSet="/large.jpg" />
                <img src="/fallback.jpg" alt="Fallback example (paths are placeholders)" className="w-full border rounded" />
              </picture>

              <h4 className="mt-3">Video & Audio</h4>
              <video controls width="320">
                <source src="/sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <audio controls className="mt-2">
                <source src="/sample.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <h4 className="mt-3">Canvas</h4>
              <canvas width="320" height="80" className="border rounded" aria-label="Demo canvas">Canvas not supported</canvas>

              <h4 className="mt-3">SVG inline (decorative)</h4>
              <svg width="100" height="30" className="inline-block"><circle cx="15" cy="15" r="10"/><rect x="35" y="5" width="60" height="20" rx="4"/></svg>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section id="forms" className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Form Controls</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="border p-4 rounded">
              <legend className="font-semibold">Text inputs</legend>

              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-sm">Text</span>
                  <input className="mt-1 block w-full rounded border p-2" value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="type something" />
                </label>

                <label className="block">
                  <span className="text-sm">Email</span>
                  <input type="email" className="mt-1 block w-full rounded border p-2" placeholder="you@example.com" />
                </label>

                <label className="block">
                  <span className="text-sm">Password</span>
                  <input type="password" className="mt-1 block w-full rounded border p-2" />
                </label>

                <label className="block">
                  <span className="text-sm">Number</span>
                  <input type="number" className="mt-1 block w-full rounded border p-2" />
                </label>

                <label className="block">
                  <span className="text-sm">Date</span>
                  <input type="date" className="mt-1 block w-full rounded border p-2" />
                </label>

                <label className="block">
                  <span className="text-sm">Color</span>
                  <input type="color" className="mt-1 block w-24 h-10 p-0" />
                </label>

                <label className="block">
                  <span className="text-sm">Range <small>({range})</small></span>
                  <input type="range" min="0" max="100" value={range} onChange={(e) => setRange(e.target.value)} className="w-full" />
                </label>
              </div>

              <div className="mt-4">
                <span className="text-sm">Checkboxes</span>
                <div className="flex gap-4 mt-2">
                  <label><input type="checkbox" checked={checkboxes.a} onChange={() => setCheckboxes((s) => ({ ...s, a: !s.a }))} /> Option A</label>
                  <label><input type="checkbox" checked={checkboxes.b} onChange={() => setCheckboxes((s) => ({ ...s, b: !s.b }))} /> Option B</label>
                </div>

                <div className="mt-3">
                  <span className="text-sm">Radio</span>
                  <div className="flex gap-4 mt-2">
                    <label><input type="radio" name="r" checked={radio === 'r1'} onChange={() => setRadio('r1')} /> Radio 1</label>
                    <label><input type="radio" name="r" checked={radio === 'r2'} onChange={() => setRadio('r2')} /> Radio 2</label>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block">
                    <span className="text-sm">Textarea</span>
                    <textarea className="mt-1 block w-full rounded border p-2" rows={3} defaultValue={"Hello"} />
                  </label>
                </div>

                <div className="mt-3">
                  <label className="block">
                    <span className="text-sm">Select</span>
                    <select value={selected} onChange={(e) => setSelected(e.target.value)} className="mt-1 block w-full rounded border p-2">
                      <option value="opt1">Option 1</option>
                      <option value="opt2">Option 2</option>
                      <option value="opt3">Option 3</option>
                    </select>
                  </label>
                </div>

                <div className="mt-3">
                  <label className="block">
                    <span className="text-sm">Datalist</span>
                    <input list="browsers" className="mt-1 block w-full rounded border p-2" placeholder="Try typing 'Ch'" />
                    <datalist id="browsers">
                      <option value="Chrome" />
                      <option value="Firefox" />
                      <option value="Edge" />
                    </datalist>
                  </label>
                </div>

                <div className="mt-3">
                  <label className="block">
                    <span className="text-sm">File</span>
                    <input ref={fileRef} type="file" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} className="mt-1" />
                    {fileName && <div className="mt-1 text-sm">Selected: {fileName}</div>}
                  </label>
                </div>

                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1 rounded bg-slate-800 text-white" type="submit">Submit</button>
                  <button className="px-3 py-1 rounded border" type="button" onClick={() => { setTextValue(''); setFileName(null); fileRef.current && (fileRef.current.value = null); }}>Reset</button>
                </div>

                <div className="mt-3">
                  <label>Output element: <output name="out">Preview: {textValue}</output></label>
                </div>

                <div className="mt-3">
                  <label>Progress & Meter</label>
                  <div className="flex gap-3 items-center mt-1">
                    <progress value={range} max={100} />
                    <meter value={range} min={0} max={100}>{range}</meter>
                  </div>
                </div>

              </div>
            </fieldset>
          </form>
        </section>

        {/* Semantic */}
        <section id="semantic" className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Semantic & Structural Elements</h2>
          <header className="p-3 border rounded">
            <h3>Header</h3>
            <p className="text-sm">This is a <code>&lt;header&gt;</code> block with a site title.</p>
          </header>

          <nav className="mt-3 p-3 border rounded">
            <h4 className="font-semibold">Nav</h4>
            <ul className="flex gap-3 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
          </nav>

          <main className="mt-3 p-3 border rounded">
            <h4>Main</h4>
            <section>
              <article>
                <h5>Article</h5>
                <p>Content inside an article element. <a href="#">Example link</a></p>
              </article>
            </section>

            <aside className="mt-2 p-2 border rounded bg-slate-50">
              <h6>Aside</h6>
              <p>Sidebar notes or related links.</p>
            </aside>
          </main>

          <footer className="mt-3 p-3 border rounded">
            <small>Footer / <address>Contact: <a href="mailto:info@example.com">info@example.com</a></address></small>
          </footer>
        </section>

        {/* Others */}
        <section id="others" className="bg-white p-5 rounded shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Other / Interactive Elements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4>Details & Summary</h4>
              <details>
                <summary>Click to expand</summary>
                <p>Hidden content revealed by &lt;details&gt;.</p>
              </details>

              <h4 className="mt-3">Dialog (example)</h4>
              {/* A full native <dialog> may require polyfill in some browsers; here's a simple demo */}
              <details>
                <summary>Open pseudo-dialog</summary>
                <div className="p-3 border mt-2 rounded">This simulates a dialog content.</div>
              </details>

              <h4 className="mt-3">IFrame & Embed</h4>
              <iframe title="Example iframe" srcDoc={`<p style="font-family:system-ui">Inline iframe content</p>`} className="w-full h-28 border rounded" />

              <h4 className="mt-3">Object & Embed</h4>
              <object type="image/svg+xml" data="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='30'%3E%3Crect width='100%25' height='100%25' fill='%23e6eef8'/%3E%3Ctext x='50%25' y='50%25' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23333'%3Eobject%3C/text%3E%3C/svg%3E">Fallback</object>

            </div>

            <div>
              <h4>Map & Area (image map)</h4>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='80'%3E%3Crect width='100%25' height='100%25' fill='%23fafafa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666'%3EImage%20map%20placeholder%3C/text%3E%3C/svg%3E" alt="map placeholder" useMap="#mymap" className="w-full border rounded" />
              <map name="mymap">
                <area shape="rect" coords="0,0,100,80" href="#" alt="left" />
                <area shape="rect" coords="100,0,220,80" href="#" alt="middle" />
              </map>

              <h4 className="mt-3">Mark, abbreviation, cite</h4>
              <p>Search term: <mark>highlight</mark>. Citation: <cite>Author Name</cite>.</p>

              <h4 className="mt-3">Hidden, template</h4>
              <p><span hidden>Hidden text (not visible)</span></p>
              <template id="tmpl"><p>Template content (not rendered until cloned)</p></template>

              <h4 className="mt-3">Metadata & link elements (examples)</h4>
              <p><a rel="noopener noreferrer" href="#">External-ish link</a></p>

            </div>
          </div>
        </section>

        <section className="text-sm text-slate-500 text-center">
          <p>This demo contains many common HTML elements but not every obscure/obsolete tag (e.g., &lt;acronym&gt;, &lt;applet&gt;). Use it as a playground or documentation page.</p>
        </section>
      </main>
    </div>
  );
}
