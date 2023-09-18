"use client";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ScoreHero from "@/components/score-hero";
import OnpageResults from "@/components/onpage-result";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [imgUrl, setImgUrl] = useState(undefined);
  const scrollRef = useRef();
  const [dataloading, setdataloading] = useState(false);

  useEffect(() => {
    if (imgUrl === undefined) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post("/api/taskpost", {
          url: url,
        });
        taskget(response.data[0].id);
      } catch (error) {
        console.log(error, "something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [imgUrl, url]);

  useEffect(() => {

    if (imgUrl !== undefined && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [imgUrl]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const taskget = async (id) => {
    try {
      await delay(15000);
      const response = await axios.post("/api/taskget", {
        task_id: id,
      });

      setData(response.data[0].result[0]);
      setdataloading(false);
    } catch (error) {
      console.log(error, "something went wrong");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/getscreenshot", {
        url: url,
      });
      setImgUrl(response.data);
      setdataloading(true)
    } catch (error) {
      console.log(error, "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <>
      {imgUrl === undefined ? (
        <>
          <LandingNavbar />
          <LandingHero
            handleSubmit={handleSubmit}
            handleUrlChange={handleUrlChange}
            url={url}
            loading={loading}
          />
        </>
      ) : (
        <>
          <LandingNavbar />
          <LandingHero
            handleSubmit={handleSubmit}
            handleUrlChange={handleUrlChange}
            url={url}
            loading={loading}
          />
          <div ref={scrollRef}></div>
          <ScoreHero data={data} imgUrl={imgUrl} dataloading={dataloading} />
          <OnpageResults data={data} />
        </>
      )}
    </>
  );
}
