/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Sections } from './components/Sections';

export default function App() {
  return (
    <div className="bg-slate-black min-h-screen text-text-main font-sans selection:bg-sky-glow/30 selection:text-sky-glow overflow-x-hidden bg-mesh relative">
      <ParticleBackground />
      <Navbar />
      <Sections />
    </div>
  );
}
