import { Divider, Button } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";

function Home({

  aFlat,
  aSharp,
  bFlat,
  cFlat,
  cSharp,
  dFlat,
  dSharp,
  eFlat,
  fFlat,
  fSharp,
  gFlat,
  gSharp,
  
}) {

  
  const [aflat, setAFlat] = useState(aFlat);
  const [asharp, setASharp] = useState(aSharp);
  const [bflat, setBFlat] = useState(bFlat);
  const [cflat, setCFlat] = useState(cFlat);
  const [csharp, setCSharp] = useState(cSharp);
  const [dflat, setDFlat] = useState(dFlat);
  const [dsharp, setDSharp] = useState(dSharp);
  const [eflat, setEFlat] = useState(eFlat);
  const [fflat, setFFlat] = useState(fFlat);
  const [fsharp, setFSharp] = useState(fSharp);
  const [gflat, setGFlat] = useState(gFlat);
  const [gsharp, setGSharp] = useState(gSharp);
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      setAFlat(aFlat);
      setASharp(aSharp);
      setBFlat(bFlat);
      setCFlat(cFlat);
      setCSharp(cSharp);
      setDFlat(dFlat);
      setDSharp(dSharp);
      setEFlat(eFlat);
      setFFlat(fFlat);
      setFSharp(fSharp);
      setGFlat(gFlat);
      setGSharp(gSharp);
      

     
    };
  
    fetchData();
  }, );

  

  
  return (
    <div className={'container'}>

        <Divider />
        <h1>Piano Keys</h1>

        <Divider />
        <Button type={"primary"} style={{ background: "black", borderColor: "blue" }} onClick={async () => {
                var music = new Audio(csharp);
                music.play();
              }}>C Sharp</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "black", borderColor: "blue" }} onClick={async () => {
                var music = new Audio(dsharp);
                music.play();

              }}>D Sharp</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "black", borderColor: "blue" }} onClick={async () => {
                var music = new Audio(fsharp);
                music.play();
              }}>F Sharp</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "black", borderColor: "blue" }} onClick={async () => {
                var music = new Audio(gsharp);
                music.play();
              }}>G Sharp</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "black", borderColor: "blue" }} onClick={async () => {
                var music = new Audio(asharp);
                music.play();
              }}>A Sharp</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        <Divider />   
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }} onClick={async () => {
                var music = new Audio(cflat);
                music.play();
              }}>&nbsp;&nbsp;&nbsp; C  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }} onClick={async () => {
                var music = new Audio(dflat);
                music.play();
              }}>&nbsp;&nbsp;&nbsp; D  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }} onClick={async () => {
                var music = new Audio(eflat);
                music.play();
              }}>&nbsp;&nbsp;&nbsp; E  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }} onClick={async () => {
                var music = new Audio(fflat);
                music.play();
              }}>&nbsp;&nbsp;&nbsp; F  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }} onClick={async () => {
                var music = new Audio(gflat);
                music.play();
              }}>&nbsp;&nbsp;&nbsp; G  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }} onClick={async () => {
                var music = new Audio(aflat);
                music.play();         
              }}>&nbsp;&nbsp;&nbsp; A  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type={"primary"} style={{ background: "white", borderColor: "blue", color:"black" }}  onClick={async () => {
                var music = new Audio(bflat);
                music.play();    
              }}>&nbsp;&nbsp;&nbsp; B  &nbsp;&nbsp;&nbsp;</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
        <Divider />
        
      </div>
  )
};

export default Home;