import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/gallery" element={<Gallery />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<About />} />
 </Routes>
</BrowserRouter>
 );