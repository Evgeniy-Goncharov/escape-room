import { COORDS } from 'functions/consts/consts';
import { YMaps, Placemark } from 'react-yandex-maps';
import { StyledMap, Wrapper } from './map.styled';

const Map = () => (
  <YMaps>
    <Wrapper>
      <StyledMap
        defaultState={{
          center: COORDS,
          zoom: 16,
        }}
      >
        <Placemark geometry={COORDS} />
      </StyledMap>
    </Wrapper>
  </YMaps>
);

export default Map;
