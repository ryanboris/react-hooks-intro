import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
};

const AppFunc = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );
  let mounted = true;

  useEffect(() => {
    document.title = `You have clicked ${count} times.`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    navigator.geolocation.watchPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleGeolocation = e => {
    if (mounted) {
      setLocation({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude,
        speed: e.coords.speed
      });
    }
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const toggleLight = () => setIsOn(prevIsOn => !prevIsOn);

  const incrementCount = () => setCount(prevCount => prevCount + 1);
  return (
    <>
      <h2>Counter</h2>
      <Button color="danger" onClick={incrementCount}>
        {count}
      </Button>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        style={{
          width: "50px",
          height: "50px"
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />

      <div>{JSON.stringify(mousePosition, null, 2)}</div>

      <h2>Network status</h2>
      <p>
        You are 
{' '}
<strong>{status ? "online" : "offline"}</strong>
      </p>

      <h2>Geolocation</h2>
      <p>
        Latitude is:
        {latitude}
      </p>
      <p>
        Longitude is
        {longitude}
      </p>
      <p>
        Your speed is:
        {speed || "0"}
      </p>
    </>
  );
};

export default AppFunc;
