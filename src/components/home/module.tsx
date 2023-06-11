import React from "react";
import Home from "./Home";
import About from "../About";
import Works from "../Works";
import Contact from "../Contact";

const module = [
    {
        path: "/",
        component: () => <Home/>
    },
    {
        path: "/about",
        component: () => <About/>
    },
    {
        path: "/work",
        component: () => <Works/>
    },
    {
        path: "/contact",
        component: () => <Contact/>
    }
]

export default module;