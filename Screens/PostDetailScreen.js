import React, {useState, useContext, useEffect} from 'react';
import {Image} from 'react-native';
import Modal from 'react-native-modal';

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
import {ModalTester, WriterPostMenu} from '../Components/Modals';

export const PostDetailScreen = ({route, navigation}) => {
  let {
    title = 'Default Title',
    id = 0,
    nickname = '이지민',
    elapsedTime = '999분 전',
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
  const [commentExist, setCommentExist] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  // 댓글의 수를 읽어서 댓글 표시할지 댓글없음 창 표시할지 나타냄
  useEffect(() => {
    if (posts[id].comments > 0) {
      setCommentExist(true);
      console.log(true);
    }
  }, []);
  const onChangeInputHandler = text => {
    setInputText(text);
  };
  const onReset = () => {
    setInputText('');
  };

  const SubmitEditingHandler = event => {
    console.log('onSubmitEditing');
    if (inputText == '') return;
    else {
      addComment();
      setCommentExist(true);
    }
  };

  // 추가할 댓글 json 객체를 생성해주는 함수
  const addComment = () => {
    console.log('addComment');
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
      elapsedTime: elapsedTime,
      recomment: recomment,
    };
    updatePost(newComment);
    onReset();
  };

  //통째 Post 데이터 중 현재 Post 데이터를 업데이트(댓글추가) 하여 context를 업데이트 한다
  const updatePost = newComment => {
    console.log('updatePost');
    comment.push(newComment);
    //console.log(comment);
    //console.log(posts[id].comment); // !!!!!!!!!!!context는 왜 업데이트 되는건지 모르겠다./... 뭐지이거 무서워
    let tempPost = posts;
    tempPost[id].comment = comment;
    setPosts([...tempPost]);
    console.log(posts[id].comment);
  };

  useEffect(() => {
    console.log('post update');
  }, [posts]);
  return (
    <PostDetailWrapper>
      <WriterPostMenu
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <TopTab
        navigation={navigation}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
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
        {commentExist ? (
          <>
            {posts[id].comment.map(cmt => {
              return <Comment key={cmt.commentId} item={cmt} postId={id} />;
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
