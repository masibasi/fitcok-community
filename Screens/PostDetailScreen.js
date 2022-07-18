import React, {useState, useContext} from 'react';
import {Image} from 'react-native';
import {ThemeBox} from '../Components/ThemeBox';
import {TopTab} from '../Components/TopTab_Post';

import {PostContext} from '../Services/Posts/posts.context';
import {NoCommentDisplay} from '../Components/NoCommentDisplay';

import LikeIcon from '../Icon/icHeartBk24.svg';
import CommentIcon from '../Icon/icCommentBk24.svg';

import {Comment} from '../Components/Comment';

import {
  Container,
  PostDetailWrapper,
  MainContainer,
  PostTitle,
  DetailsWrapper,
  Nickname,
  Dot,
  ElapsedTime,
  MainText,
  ButtonContainer,
  Likes,
  LikeButtonWrapper,
  CommentButtonWrapper,
  Comments,
  EnterCommentWrapper,
  EnterComment,
  EnterCommentBtn,
  Spacer,
  ImgSpacer,
  FlatListItemSeperator,
  ImgList,
} from './PostDetailScreen.style';

export const PostDetailScreen = ({route, navigation}) => {
  let {
    title = 'Default Title',
    id = 0,
    nickname = '이지민',
    elapsed_time = '999분 전',
    mainText = 'hello my name is jimin',
    likes = '-1',
    isQuestionPost = false,
    isPopular = false,
    postTag = false,
    image = null,
    comments = '-1',
    comment = [],
    src = [],
  } = route.params.datas;
  const {posts, setPosts} = useContext(PostContext);
  const [inputText, setInputText] = useState('');
  const onChangeInputHandler = text => {
    setInputText(text);
    console.log(inputText);
  };
  const onReset = () => {
    setInputText('');
  };
  let postTemp = posts;

  const SubmitEditingHandler = event => {
    console.log('onSubmitEditing');
    if (inputText == '') return;
    addComment();
  };

  // 추가할 댓글 json 객체를 생성해주는 함수
  const addComment = () => {
    let commentId = posts[id].comment.length;
    let commenter = '매콤한 닭가슴살'; // 게시자 업데이트 필요
    let writer = true; // 작성자 여부 체크 팔요
    let mainText = inputText;
    let elapsedTime = '방금 전'; // 추가된 시간 업데이트 필요
    let recomment = [];
    console.log(mainText);
    let newComment = {
      commentId: commentId,
      nickname: commenter,
      writer: writer,
      mainText: mainText,
      elapsed_time: elapsedTime,
      recomment: recomment,
    };
    updatePost(newComment);
    onReset();
  };

  //통째 Post 데이터 중 현재 Post 데이터를 업데이트(댓글추가) 하여 context를 업데이트 한다
  const updatePost = newComment => {
    comment.push(newComment);
    postTemp[id].comment = comment;
    console.log(postTemp[id].comment);
    setPosts([...posts]);
  };
  return (
    <PostDetailWrapper>
      <TopTab navigation={navigation} />
      <Container>
        <MainContainer>
          <ThemeBox />
          <PostTitle>{posts[id].title}</PostTitle>
          <DetailsWrapper>
            <Nickname>{posts[id].nickname}</Nickname>
            <Dot>·</Dot>
            <ElapsedTime>{posts[id].elapsed_time}</ElapsedTime>
          </DetailsWrapper>
          <MainText>{posts[id].mainText}</MainText>

          {src != [] ? (
            <ImgList
              data={src}
              renderItem={({item, index, separators}) => {
                return <Image source={src[index]} />;
              }}
              keyExtractor={item => item}
              ItemSeparatorComponent={FlatListItemSeperator}
            />
          ) : null}
        </MainContainer>
        <ButtonContainer>
          <LikeButtonWrapper onPress={() => (likes = likes + 1)}>
            <LikeIcon />
          </LikeButtonWrapper>
          <Likes>{posts[id].likes}</Likes>
          <CommentButtonWrapper>
            <CommentIcon />
          </CommentButtonWrapper>
          <Comments>{posts[id].comments}</Comments>
        </ButtonContainer>
        {posts[id].comments > 0 ? (
          <>
            {posts[id].comment.map(cmt => {
              return <Comment key={cmt.commentId} item={cmt} />;
            })}
            <Spacer />
          </>
        ) : (
          <NoCommentDisplay />
        )}
      </Container>
      <EnterCommentWrapper>
        <EnterComment
          value={inputText}
          onEndEditing={() => {}}
          onSubmitEditing={SubmitEditingHandler}
          onChangeText={onChangeInputHandler}
        />
        <EnterCommentBtn onPress={SubmitEditingHandler} />
      </EnterCommentWrapper>
    </PostDetailWrapper>
  );
};
