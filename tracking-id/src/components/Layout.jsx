import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="site-wrapper">
      {/* <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer /> */}

      <div>
        <h4 className="break-words whitespace-normal p-4">
          arhireuaegharhrgh%dfhdfjfdfjkfjfjkfdjfdhfjhfjfjh%fdhdfkjdfjfjfjh%jfgjkvjkhfjkfdjk$fgjfgjfgjkf%fjhfjhfgjhfgfhfdjdfmdfbjdfjdfvjdfvbdfvjfjfjd%fgbhhdghdfhfvbcdhfjhdfk%#fvhdfvjhdfvhdffdfdf#arhireuaegharhrgh%dfhdfjfdfjkfjfjkfdjfdhfjhfjfjh%fdhdfkjdfjfjfjh%jfgjkvjkhfjkfdjk$fgjfgjfgjkf%fjhfjhfgjhfgfhfdjdfmdfbjdfjdfvjdfvbdfvjfjfjd%fgbhhdghdfhfvbcdhfjhdfk%#fvhdfvjhdfvhdffdfdf#arhireuaegharhrgh%dfhdfjfdfjkfjfjkfdjfdhfjhfjfjh%fdhdfkjdfjfjfjh%jfgjkvjkhfjkfdjk$fgjfgjfgjkf%fjhfjhfgjhfgfhfdjdfmdfbjdfjdfvjdfvbdfvjfjfjd%fgbhhdghdfhfvbcdhfjhdfk%#fvhdfvjhdfvhdffdfdf#
        </h4>
      </div>
    </div>
  );
}
