import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { db } from "./firebase";
import React, { useEffect, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";

function App() {

  const hasSavedVisitorInfo = useRef(false); // Use a ref to track if info has been saved

  const getIPLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        continent_code: data.continent_code,
        country_area: data.country_area,
        country_calling_code: data.country_calling_code,
        country_capital: data.country_capital,
        country_code: data.country_code,
        country_code_iso3: data.country_code_iso3,
        country_name: data.country_name,
        country_population: data.country_population,
        country_tld: data.country_tld,
        currency: data.currency,
        currency_name: data.currency_name,
        in_eu: data.in_eu,
        latitude: data.latitude,
        longitude: data.longitude,
        network: data.network,
        org: data.org,
        postal: data.postal,
        timezone: data.timezone,
        utc_offset: data.utc_offset,
        version: data.version,
      };
    } catch (error) {
      console.error("Error fetching IP location: ", error);
      return null;
    }
  };

  useEffect(() => {
    const saveVisitorInfo = async () => {
      try {
        if (hasSavedVisitorInfo.current) return; // Prevent saving if already done

        // Create the visitor information object
        const visitorInfo = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          ipInfo: await getIPLocation(), // Store IP info
        };

        // Add a new document with visitor information
        const docRef = await addDoc(collection(db, "visitors"), visitorInfo);
        console.log("Visitor info saved successfully with ID: ", docRef.id);

        hasSavedVisitorInfo.current = true; // Set the flag to true after saving
      } catch (error) {
        console.error("Error saving visitor info: ", error);
      }
    };

    // Call the function when the component mounts
    saveVisitorInfo();
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
