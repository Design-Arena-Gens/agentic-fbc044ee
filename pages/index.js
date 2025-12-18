import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <>
      <Head>
        <title>شروع کنیم - Let's Start</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <main>
          <h1>🚀 شروع کنیم!</h1>
          <p className="subtitle">Let's Start Building Amazing Things</p>

          <div className="card">
            <h2>Counter Demo</h2>
            <div className="counter">
              <button onClick={() => setCount(count - 1)}>−</button>
              <span className="count">{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>

          <div className="card">
            <h2>Text Input Demo</h2>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something..."
              className="input"
            />
            {text && <p className="output">You wrote: <strong>{text}</strong></p>}
          </div>

          <div className="features">
            <div className="feature">
              <span className="icon">⚡</span>
              <h3>Fast</h3>
              <p>Built with Next.js</p>
            </div>
            <div className="feature">
              <span className="icon">🎨</span>
              <h3>Beautiful</h3>
              <p>Modern design</p>
            </div>
            <div className="feature">
              <span className="icon">📱</span>
              <h3>Responsive</h3>
              <p>Works everywhere</p>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        main {
          max-width: 800px;
          width: 100%;
          text-align: center;
        }

        h1 {
          color: white;
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .subtitle {
          color: rgba(255,255,255,0.9);
          font-size: 1.2rem;
          margin-bottom: 3rem;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .card h2 {
          color: #667eea;
          margin-bottom: 1.5rem;
        }

        .counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .counter button {
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          background: #667eea;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .counter button:hover {
          background: #764ba2;
          transform: scale(1.1);
        }

        .counter button:active {
          transform: scale(0.95);
        }

        .count {
          font-size: 3rem;
          font-weight: bold;
          color: #667eea;
          min-width: 80px;
        }

        .input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .input:focus {
          outline: none;
          border-color: #667eea;
        }

        .output {
          margin-top: 1rem;
          color: #666;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .feature {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }

        .feature h3 {
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .feature p {
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          .counter {
            gap: 1rem;
          }

          .counter button {
            width: 50px;
            height: 50px;
          }

          .count {
            font-size: 2rem;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
      `}</style>
    </>
  );
}
