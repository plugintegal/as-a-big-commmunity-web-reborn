import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSquadDetail } from '../../redux/actions/userActions'

const Hero = () => {
  const squads = useSelector((state) => state.squadReducers.squads);
  const history = useHistory()
  const dispatch = useDispatch();

  const handleDetailSquad = (e) => {
    dispatch(fetchSquadDetail(e.target.id, null))
    history.push({
      pathname : '/about-squad',
      state : {
        squadId : e.target.id
      }
    })
  }

  return (
    <div>
      <section className="text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-3 font-bold text-gray-900">
              Plugin
            </h1>
            <nav className="flex flex-wrap items-center text-base justify-center mb-10">
              <p className="mr-12 hover:text-gray-900">Passionate</p>
              <p className="mr-12 hover:text-gray-900">Learning</p>
              <p className="mr-12 hover:text-gray-900">Unity</p>
              <p className="mr-12 hover:text-gray-900">Global</p>
              <p className="mr-12 hover:text-gray-900">Inovate</p>
              <p className="hover:text-gray-900">Nationality</p>
            </nav>
            <p className="mb-8 leading-relaxed text-2xl">
              Komunitas linux dan pengembangan aplikasi di Politeknik Harapan
              Bersama Tegal.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center object-containt rounded"
              alt="hero"
              src="/assets/img/Hero.png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font -mt-36">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded -ml-16"
              alt="hero"
              src="/assets/img/tentang.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Tentang Plugin
            </h1>
            <p className="mb-8 text-lg ">
              <span className="font-bold">PLUGIN</span> adalah suatu organisasi
              atau komunitas studi linux dan pengembangan aplikasi di Politeknik
              Harapan Bersama Tegal. Kami mempunyai tujuan untuk mengenalkan dan
              mengOpen Source kan mahasiswa dan masyarakat umum dengan berbagai
              kegiatan yang nantinya bisa membuka wawasan serta mindset
              OpenSource guna untuk mengurangi angka pembajakan Software di
              Indonesia
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto py-10">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Plugin Squad
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-1xl text-base">
              <span className="font-bold">Squad</span> di{" "}
              <span className="font-bold"> PLUGIN</span> ada 4, masing-masing
              punya fokus dan tujuan tersendiri, dibuatnya squad ini agar
              teman-teman PLUGIN bisa menentukan akan konsentrasi dimana
            </p>
          </div>
        </div>
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            {squads.map((squad, index) => {
              return (
                <div className="p-4 lg:w-1/2 md:w-full cursor-pointer" key={index} onClick={handleDetailSquad}>
                  <div id={squad.id}>
                    <div className="flex p-8 sm:flex-row flex-col text-center" id={squad.id}>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3"  id={squad.id}>
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
