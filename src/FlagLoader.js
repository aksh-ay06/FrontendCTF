import { useState, useEffect } from "react";
import FlagRenderer from "./FlagRenderer";

function FlagLoader() {
  const [flag, setFlag] = useState(""); // To store the flag
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e6b"
    )
      .then((response) => response.text())
      .then((data) => {
        setFlag(data); // Set the flag when the request is complete
        setLoading(false); // Turn off loading indicator
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>{loading ? <p>Loading...</p> : <FlagRenderer flag={flag} />}</div>
  );
}

export default FlagLoader;
