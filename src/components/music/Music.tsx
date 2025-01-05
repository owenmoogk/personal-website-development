import {
  Anchor,
  Container,
  Flex,
  Image,
  Stack,
  Tabs,
  Text,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSpotify } from 'react-icons/fa';

import type { TimeframeType } from '@api/spotify';
import { getTopTracks } from '@api/spotify';
import type { SpotifyTopTrackItem, SpotifyTopTracks } from '@api/spotifyTypes';

export default function MusicPage() {
  const [topTracks, setTopTracks] = useState<SpotifyTopTracks>();
  const [activeTab, setActiveTab] = useState<TimeframeType>('short_term');

  useEffect(() => {
    void getTopTracks(activeTab).then((response) => setTopTracks(response));
  }, [activeTab]);

  return (
    <Container maw={650}>
      <Helmet>
        <title>{'Spotify - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Music</p>
      <p className="subtitle">
        My favorites (pulled from{' '}
        <a
          href="https://open.spotify.com/user/uoxjt33b2c9axd2h9d74l3wag?si=R-cfHOGkSvGN-Ru5N81miQ"
          target="_blank"
          rel="noreferrer"
        >
          my Spotify
        </a>
        ).
      </p>
      <Stack justify="center" m="auto" pt={20}>
        <Tabs
          value={activeTab}
          onChange={(value) => {
            setActiveTab(value as TimeframeType);
            setTopTracks(undefined);
          }}
        >
          <Tabs.List justify="center">
            <Tabs.Tab value="short_term">4 Weeks</Tabs.Tab>
            <Tabs.Tab value="medium_term">6 Months</Tabs.Tab>
            <Tabs.Tab value="long_term">All Time</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        {topTracks?.items.map((track, key) => <SongRow {...track} key={key} />)}
      </Stack>
    </Container>
  );
}

const SongRow = (song: SpotifyTopTrackItem) => {
  const albumArtSize = 70;
  return (
    <Flex align="center" justify="space-between">
      <Flex gap={20}>
        <Image
          src={song.album.images[0].url}
          height={albumArtSize}
          width={albumArtSize}
        />
        <Stack gap={5} justify="center">
          <a href={song.external_urls.spotify} target="_blank" rel="noreferrer">
            {song.name}
          </a>
          <Flex>
            {song.artists.map((artist, key) => (
              <>
                <Anchor
                  key={key}
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                  c="gray"
                  fz={'sm'}
                  fs="italic"
                >
                  {artist.name}
                </Anchor>
                {key !== song.artists.length - 1 && <Text c="gray">, </Text>}
              </>
            ))}
          </Flex>
        </Stack>
      </Flex>
      <a href={song.external_urls.spotify} target="_blank" rel="noreferrer">
        <FaSpotify size={30} />
      </a>
    </Flex>
  );
};
