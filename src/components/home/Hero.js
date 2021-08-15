import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSquadDetail } from "../../redux/actions/userActions";

const Hero = () => {
  const squads = useSelector((state) => state.squadReducers.squads);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDetailSquad = (e) => {
    dispatch(fetchSquadDetail(e.target.id, null));
    history.push({
      pathname: "/about-squad",
      state: {
        squadId: e.target.id,
      },
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:-mr-32 -mt-12">
            <h1 className="title-font text-6xl mb-3 font-bold text-gray-900 tracking-widest">
              Plugin
            </h1>
            <div className="flex flex-wrap items-center text-lg font-medium justify-between mb-5 gap-3 w-full">
              <p className="hover:text-gray-900 lg:block md:hidden sm:hidden">
                Passionate
              </p>
              <p className="hover:text-gray-900 lg:block md:hidden sm:hidden">
                Learning
              </p>
              <p className="hover:text-gray-900 lg:block md:hidden sm:hidden">
                Unity
              </p>
              <p className="hover:text-gray-900 lg:block md:hidden sm:hidden">
                Global
              </p>
              <p className="hover:text-gray-900 lg:block md:hidden sm:hidden">
                Inovate
              </p>
              <p className="hover:text-gray-900 lg:block md:hidden sm:hidden">
                Nationality
              </p>
            </div>

            <div className="w-full">
              <p className="mb-8 leading-relaxed text-3xl tracking-wide font-medium">
                komunitas linux dan pengembangan aplikasi di Politeknik Harapan
                Bersama Tegal.
              </p>
            </div>
          </div>
          <div className="w-6/12">
            <img
              className="object-cover object-center object-contain rounded h-full w-full"
              alt="hero"
              src="https://res.cloudinary.com/zada/image/upload/v1628083472/Hero-min_k4j4lu.png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font lg:-mt-24 sm:mt-20 md:mt-20 flex">
        <div className="w-5/12 left-0">
          <img
            className="object-cover"
            alt="hero"
            src="https://res.cloudinary.com/zada/image/upload/v1628083471/tentang-min_na5nuh.png"
          />
        </div>
        <div className="w-8/12 p-32 flex flex-col items-start justify-center">
          <h1 className="title-font text-5xl font-bold text-gray-900 tracking-wider">
            Tentang Plugin
          </h1>
          <div className="w-auto my-3">
            <p className="leading-relaxed text-xl text-base tracking-wide font-medium">
              PLUG-IN adalah suatu organisasi atau komunitas studi linux dan
              pengembangan aplikasi di Politeknik Harapan Bersama Tegal. Kami
              mempunyai tujuan untuk mengenalkan dan mengOpen Source kan
              mahasiswa dan masyarakat umum dengan berbagai kegiatan yang
              nantinya bisa membuka wawasan serta mindset OpenSource guna untuk
              mengurangi angka pembajakan Software di Indonesia
            </p>
          </div>
          <button className="bg-biru self-center text-white p-4 py-2 rounded-full">Lihat selengkapnya</button>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto py-10">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              PLUG-IN Squad
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-1xl text-base">
              <span className="font-bold">Squad</span> di{" "}
              <span className="font-bold"> PLUG-IN</span> ada 4, masing-masing
              punya fokus dan tujuan tersendiri, dibuatnya squad ini agar
              teman-teman PLUG-IN bisa menentukan akan konsentrasi dimana
            </p>
          </div>
        </div>
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {squads.map((squad, index) => {
              return (
                <div
                  className="p-4 lg:w-1/2 md:w-full cursor-pointer"
                  key={index}
                  onClick={handleDetailSquad}
                >
                  <div
                    id={squad.id}
                    className="border-2 rounded-lg hover:bg-biru hover:text-white"
                  >
                    <div
                      className="flex p-8 sm:flex-row flex-col text-center"
                      id={squad.id}
                    >
                      <div className="flex-grow">
                        <h2
                          className="font-bold text-lg title-font font-medium mb-3"
                          id={squad.id}
                        >
                          {squad.squads_name}
                        </h2>
                        <p className="leading-relaxed text-base" id={squad.id}>
                          {squad.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Hero);
