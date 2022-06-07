import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1 ? "text-blue-400" : "text bg-blue-400")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Comments
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "text-blue-400 " : "text bg-blue-400")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Favorites
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Furkan Yilmaz Kız Kulesine yorum yaptı. <br />
                    <br /> Furkan Yilmaz Galata Köprüsüne yorum yaptı.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-auto">
                    <div className="pr-48">
                      <img
                        className="w-72 ml-12 rounded-lg"
                        src="https://media.istockphoto.com/photos/notre-dame-de-paris-cathedral-france-picture-id465616584?k=20&m=465616584&s=612x612&w=0&h=36toSt_gCCrq_zCSEnV5zp78qew9faE0LskP_Of7F_U="
                      ></img>
                      <div className="pt-4 px-12">
                        <p className="text-[#011847] font-bold text*xl mt-2">
                          Notre Dame Katedrali
                        </p>
                        <div className="text-[#45413E]">
                          Notre Dame Katedrali Paris, Fransa'da bulunan dünyaca
                          ünlü bir katedraldir. Meryem Ana'ya ithafen
                          isimlendirilmiştir. Gotik yapı Île de la Cité'nin doğu
                          kısmında, Paris'in diğer tüm önemli yapıları gibi
                          Seine Nehri'nin kıyısında bulunur. Girişi batıya
                          bakar.
                        </div>
                      </div>
                    </div>
                    <div className="bg-cover">
                      <img
                        className="w-72 ml-12 rounded-lg"
                        src="https://i1.wp.com/blog.eyobus.com.tr/wp-content/uploads/2017/05/Eyfel-Kulesi-Paris.jpg?resize=640%2C400&ssl=1"
                      ></img>
                      <div className="pt-4 px-12">
                        <p className="text-[#011847] font-bold text*xl mt-2">
                          Eyfel kulesi
                        </p>
                        <div className="text-[#45413E]">
                          Eyfel Kulesi, Paris'teki demir kule. Kule, aynı
                          zamanda tüm dünyada Fransa'nın sembolü halini
                          almıştır. İsmini, inşa ettiren Fransız mimar Gustave
                          Eiffel'den alır. En büyük turizm cazibelerinden biri
                          olan Eyfel Kulesi, yılda 6 milyon turist çeker. 2002
                          yılında toplam ziyaretçi sayısı 200 milyona
                          ulaşmıştır.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs />
    </>
  );
}
