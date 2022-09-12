import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Codevember from "./components/projects/codevember/Codevember";
import Shaders from "./components/projects/shaders/Shaders";
import MusicVisualization from "./components/projects/musicVisualisation/musicVisual";
import SomeWorks from "./components/projects/someWorks/Works";
import OtherPeoplesWork from "./components/projects/otherPeoplesWork/otherPeoplesWork";
import Akella from "./components/projects/Akella/akella";
import TutorialWorks from "./components/projects/tutorials/tutorialWorks";
import MainFunc from "./components/projects/baseFunc/mainFunc";
import TestWork from "./components/projects/testWorks/testWork";

export default function () {
    return (<>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="Codevember">
                            <Route index element={<Codevember.Galaxy/>}/>
                            <Route path={`Galaxy`} element={<Codevember.Galaxy/>}/>
                        </Route>

                        <Route path="Shaders">
                            <Route index element={<Shaders.Shader1/>}/>
                            <Route path={`Shader1`} element={<Shaders.Shader1/>}/>
                            <Route path={`Shader2`} element={<Shaders.Shader2/>}/>
                            <Route path={`Shader3`} element={<Shaders.Shader3/>}/>
                            <Route path={`Shader4`} element={<Shaders.Shader4/>}/>
                        </Route>

                        <Route path="MusicVisualization">
                            <Route index element={<MusicVisualization.MusicEqualizer/>}/>
                            <Route path={`MusicVisualization`} element={<MusicVisualization.MusicEqualizer/>}/>
                            <Route path={`LandSlide`} element={<MusicVisualization.LandSlide/>}/>
                        </Route>

                        <Route path="SomeWorks">
                            <Route index element={<SomeWorks.Planet/>}/>
                            <Route path={`Planet`} element={<SomeWorks.Planet/>}/>
                            <Route path={`Sky`} element={<SomeWorks.Sky/>}/>
                            <Route path={`Aviator`} element={<SomeWorks.Aviator/>}/>
                            <Route path={`PointLights`} element={<SomeWorks.PointLights/>}/>
                        </Route>

                        <Route path="OtherPeoplesWork">
                            <Route index element={<OtherPeoplesWork.Portal/>}/>
                            <Route path={`Portal`} element={<OtherPeoplesWork.Portal/>}/>
                            <Route path={`Benares`} element={<OtherPeoplesWork.Benares/>}/>
                        </Route>

                        <Route path="Akella">
                            <Route index element={<Akella.Pepyaka/>}/>
                            <Route path={`Pepyaka`} element={<Akella.Pepyaka/>}/>dw
                            <Route path={`TriangleWallpaper`} element={<Akella.TriangleWallpaper/>}/>
                            <Route path={`CreepingStripes`} element={<Akella.CreepingStripes/>}/>
                            <Route path={`DisplacedBox`} element={<Akella.DisplacedBox/>}/>
                        </Route>

                        <Route path="RemakeTutorialWorks">
                            <Route index element={<TutorialWorks.ThanosPortal/>}/>
                            <Route path={`thanosPortal`} element={<TutorialWorks.ThanosPortal/>}/>
                            <Route path={`rain`} element={<TutorialWorks.Rain/>}/>
                        </Route>

                        <Route path="MainFunc">
                            <Route index element={<MainFunc.PositionRotationScale/>}/>
                            <Route path={`PositionRotationScale`} element={<MainFunc.PositionRotationScale/>}/>
                            <Route path={`Quaternion`} element={<MainFunc.Quaternion/>}/>
                            <Route path={`Matrix`} element={<MainFunc.Matrix/>}/>
                        </Route>

                        <Route path="TestWork">
                            <Route index element={<TestWork/>}/>
                            <Route path={`thanosPortal`} element={<TestWork.House/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}