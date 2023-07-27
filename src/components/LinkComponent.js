
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ListComponent } from './ListComponent';


export function LinkComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ListComponent" element={<ListComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}
