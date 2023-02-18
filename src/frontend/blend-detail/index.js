import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlendDetail = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(async () => {
      const result = {};
      const { data: blend } = await axios.get(`/api/v1/blends/${id}`);

      const {data: blends} = await axios.get('/api/v1/blends');

      const {data: spices} = await axios.get('/api/v1/spices');

      setResult({blend, blends, spices});

  }, [id]);



  return (
    <div>
      <h2>Blend Detail Page</h2>
      {result && (
        <div>
          <div>Blend Name: {result.blend.name}</div>
          <div>Blend Description: {result.blend.description}</div>
          <div>Blend Spices:</div>
          <ul>
            {
            // getSpicesFromBlend(blend.id, blend.blends, blend.spices).map((spice) => (
            //   <li key={spice.id}>{spice.name}</li>
            // ))
            }
          </ul>

        </div>
      )}
    </div>
  );
};

export default BlendDetail;
