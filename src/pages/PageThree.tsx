import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WebThreeSection from "../components/WebThreeSection";
import {Link} from "react-router-dom";
import {Container, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function PageThree(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const apiURL = "https://gc4fvpbabl.execute-api.eu-west-2.amazonaws.com/live";

  useEffect(() => {
    async function fetchImage() {
      const response = await axios.get(apiURL);
      console.log(response);

      let data = JSON.parse(response.data.Payload);
      let imageUrl = `https://${data.body}.ipfs.dweb.link`;
      setImageUrl(imageUrl);
    }
    fetchImage()
  }, [imageUrl, setImageUrl])

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
        <Typography className="pageText--heading">
          How they Work
        </Typography>
        <Typography className="pageText--body">This section is under development, but check out this video to get set up with MetaMask, and then try connecting and see your account number appearing in the box below.</Typography>
          <WebThreeSection />

        <iframe width="100%" height="315" src="https://www.youtube.com/embed/6h_liI6atEk" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>

        <Link to="/get-involved" className="pagePagination--link">
          <ListItemText primary="Get Involved ->" />
        </Link>
        </Container>
      </div>
    </section>
  );
}
