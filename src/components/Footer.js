import React from "react";
import f from "../images/f.png";
import g from "../images/g+.png";
import t from "../images/t.png";
import p from "../images/p.png";

export default function Footer() {
  return (
    <div className="w-fw mx-auto flex  space-x-32 font-lato bg-white">
      <div className="mr-48 mb-12">
        <br></br>
        <p className="col-sm">
          &copy;Copyright {new Date().getFullYear()} All Rights Reserved.
        </p>
        <br></br>
        <br></br>
        <h1 className="font-bold text-[#333333]">İLETİŞİM</h1>
        <br></br>
        <div className="text-[#45413E]">
          Genel Merkez
          <br></br>
          Arda M Çeşme Ocak Sk
          <br></br>
          No 52 İzmir/Alsancak
          <br></br>
          <br></br>
        </div>
        <a
          className="text-[#45413E]"
          href="mailto:someone@example.com"
          target="_blank"
        >
          contact@gezirehberi.com
        </a>
        <br></br>
        <br></br>
        <a href="tel:+1 (888) 548-4344" className="text-[#45413E]">
          0 212 254 55 66
        </a>
      </div>
      <div>
        <div className="mr-48">
          <br></br>
          <h1 className="font-bold text-[/404333333]">HAKKIMIZDA</h1>
          <br></br>
        </div>
        <div className="text-[/40445413E]">
          <ul className="space-y-4 opacity-70">
            <li>
              <a href="/404">Biz Kimiz</a>
            </li>
            <li>
              <a href="/404">Neden Seyahat ?</a>
            </li>
            <li>
              <a href="/404">Misyon ve Vizyon</a>
            </li>
            <li>
              <a href="/404">Politikalar</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="mr-4">
          <a href="/Maps" target="_blank">
            <img className="opacity-50 w-2 hover:opacity-100" src={f}></img>
          </a>
        </div>
        <div className="mr-4">
          <a href="/Maps">
            <img className="opacity-50 hover:opacity-100" src={g}></img>
          </a>
        </div>
        <div className="">
          <a href="/Maps" target="_blank">
            <img className="opacity-50 hover:opacity-100" src={t}></img>
          </a>
        </div>
        <div className="ml-4">
          <a href="/Maps">
            <img className="opacity-50 hover:opacity-100" src={p}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
