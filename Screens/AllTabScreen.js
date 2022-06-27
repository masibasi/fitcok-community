import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {TopTab} from '../Components/TopTab_BottomTabNav';
import {TopNav} from '../Navigation/TopNav';
import {Post} from '../Components/Post';

import PencilIcon from '../Icon/icPencilWhite24.svg';

import {PostContext} from '../Services/Posts/posts.context';

const MainContainer = styled(ScrollView)`
  // background-color: turquoise;
`;
const ContentWrapper = styled(View)`
  flex: 1;
  background-color: white;
`;
const ButtonWrapper = styled(View)`
  position: absolute;
  bottom: 27px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const WritePostButton = styled(TouchableOpacity).attrs()`
  border-radius: 50px;
  width: 127px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: 'rgb(24,25,26)';
  flex-direction: row;
`;
const ButtonText = styled(Text)`
  color: 'rgb(255,255,255)';
  font-size: 14px;
  font-weight: 500;
  margin-right: 6px;
  margin-left: 6px;
`;

export const PostList = styled(FlatList).attrs({
  contentContainerStyle: {
    //padding: 16,
  },
})``;

export const AllTabScreen = ({navigation}) => {
  const {posts, setPosts} = useContext(PostContext);
  return (
    <ContentWrapper>
      <TopTab navigation={navigation} />
      <TopNav title="all" navigation={navigation} />

      <PostList
        data={posts}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PostDetailScreen', {
                  datas: item,
                });
              }}>
              <Post navigation={navigation} datas={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={<View></View>}
        ListFooterComponent={
          <View
            style={{
              height: 80,
              width: '100%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        }
      />
      <ButtonWrapper>
        <WritePostButton
          onPress={() => {
            navigation.navigate('WritePostScreen');
          }}>
          <PencilIcon />
          <ButtonText>글 쓰기</ButtonText>
        </WritePostButton>
      </ButtonWrapper>
    </ContentWrapper>
  );
};
