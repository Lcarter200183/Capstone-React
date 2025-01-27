import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(window.bodyTag);
<<<<<<< HEAD
 root.render(<main></main>);
=======
 root.render(
 <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
 );
>>>>>>> homeBrowserRouter
