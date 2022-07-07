import { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import { defaultStyle } from './defaultStyle';
import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import { defaultMentionStyle } from './defaultMentionStyle';
import { useEffect } from 'react';

export const Chat = () => {
  const users = [
    {
      id: 'userId001',
      display: '林 達郎'
    },
    {
      id: 'userId002',
      display: '青木さやか'
    },
    {
      id: 'userId003',
      display: 'Mary Hey'
    }
  ];
  const [message, setMessage] = useState('');
  const [targetUsers, setTargetUsers] = useState([]);
  const handleChange = (e, text) => {
    setMessage(text);
  };
  const handleAdd = (val) => {
    console.log('🐍add; ', val);
  };
  const handleRemove = (val) => {
    // doesn't work ...
    console.log('🐍remove; ', val);
  };

  useEffect(() => {
    console.log('🐈', message);
    const exp1 = /(?<=@\[.*?\]\().*?(?=\))/g;
    const result = message.match(exp1);
    console.log('🐕', [...new Set(result)]);
    setTargetUsers([...new Set(result)]);
  }, [message]);

  return (
    <VStack maxW="400px">
      <Box>[[user options]]</Box>
      <Box pb="36px">{JSON.stringify(users)}</Box>
      <MentionsInput
        value={message}
        placeholder={"Mention people using '@'"}
        onChange={handleChange}
        style={defaultStyle}
      >
        <Mention
          trigger="@"
          data={users}
          onAdd={handleAdd}
          onRemove={handleRemove}
          appendSpaceOnAdd={handleRemove}
          displayTransform={(id, display) => `@${display}`}
          style={defaultMentionStyle}
          // renderSuggestion={(
          //   suggestion,
          //   search,
          //   highlightedDisplay,
          //   index,
          //   focused
          // ) => (
          //   <Box bgColor="yellow" className={`user ${focused ? 'focused' : ''}`}>
          //     {highlightedDisplay}
          //   </Box>
          // )}
        />
        {/* <Mention
        trigger="#"
        data={tags}
        // renderSuggestion={this.renderTagSuggestion}
      /> */}
      </MentionsInput>
      <HStack justify="flex-end" w="100%">
        <Button>送信</Button>
      </HStack>

      <Box>送信先IDs: {targetUsers.join(' / ')}</Box>
    </VStack>
  );
};
