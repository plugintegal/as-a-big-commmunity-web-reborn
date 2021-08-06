import React, { useEffect } from "react";
import Hero from "../components/aboutSquad/Hero";
import Theory from "../components/aboutSquad/Theory";
import Navbar from "../components/Navbar";
import { withRouter, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSquadDetail, fetchBatch } from "../redux/actions/userActions";
import Loading from '../components/parts/Loading'
import Footer from "../components/Footer";

const AboutSquad = () => {
  const location = useLocation();
  const squadId = location.state.squadId;
  const dispatch = useDispatch();
  const batches = useSelector((state) => state.batchReducers.batch);
  const squadDetail = useSelector((state) => state.squadReducers.squadDetail);
  useEffect(() => {
    dispatch(fetchSquadDetail(squadId, null));
    dispatch(fetchBatch());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      {batches.length === 0 && (squadDetail && Object.values(squadDetail).length === 0 && squadDetail.consructor === Object) ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <Theory squadId={squadId} batches={batches} squadDetail={squadDetail} />
          <Footer />
        </>
      )}
    </>
  );
};

export default withRouter(AboutSquad);
