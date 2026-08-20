'use client';

import { useState } from 'react';

import { Button, Skeleton, Text, VStack } from 'extraction-ui';

export const SkeletonExample = () => {
  const [loading, setLoading] = useState(true);

  return (
    <VStack className="w-80">
      <Skeleton loading={loading}>
        <Text>{`Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do.`}</Text>
      </Skeleton>
      <Button className="w-full" onClick={() => setLoading(!loading)}>
        Toggle
      </Button>
    </VStack>
  );
};
