import React, {useState, useContext} from 'react';

import DotMenu from '../Icon/icDotmenuGray18.svg';
import WriterBadge from '../Icon/communityBadge.svg';

import {ReComment} from './ReComment';
import {PostContext} from '../Services/Posts/posts.context';
import {
  Container,
  ContentWrapper,
  TopWrapper,
  WriterWrapper,
  Writer,
  DotMenuWrapper,
  CommentText,
  BottomWrapper,
  DaysAgo,
  AddCommentWrapper,
  AddCommentForComment,
  MoreButtonWrapper,
  MoreButtonText,
  Line,
  ReCommentTextInput,
} from './Comment.style';
import {MyCommentMenu, OtherCommentMenu} from './Modals';
export const Comment = props => {
  const [moreClicked, setMoreClicked] = useState(false);
  const {posts, setPosts} = useContext(PostContext);
  const [inputText, setInputText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isWriter, setIsWriter] = useState(writer);
  let {
    title = 'Default Title',
    commentId = '',
    nickname = '이지민',
    elapsedTime = '999분 전',
    mainText = 'hello my name is jimin',
    isQuestionPost = false,
    isPopular = false,
    postTag = null,
    image = null,
    likes = '0',
    comments = '-1',
    writer = true,
    recomment = [],
  } = props.item;
  const postId = props.postId;

  // console.log('commentId : ' + commentId);
  // console.log(posts[postId].comment[commentId].recomment);
  // console.log(recomment);
  const onChangeInputHandler = text => {
    setInputText(text);
  };
  const onReset = () => {
    setInputText('');
  };

  const SubmitEditingHandler = event => {
    console.log('onSubmitEditing');
    if (inputText == '') return;
    addReComment();
  };

  // 추가할 댓글 json 객체를 생성해주는 함수
  const addReComment = () => {
    let recommentId = posts[postId].comment[commentId].recomment.length;
    let recommenter = '매콤한 닭가슴살'; // 게시자 업데이트 필요
    let mainText = inputText;
    let elapsedTime = '방금 전'; // 추가된 시간 업데이트 필요
    console.log('recomment text : ' + mainText);
    let newRecomment = {
      commentId: recommentId,
      nickname: recommenter,
      mainText: mainText,
      elapsed_time: elapsedTime,
    };
    updatePost(newRecomment);
    onReset();
  };

  //통째 Post 데이터 중 현재 Post 데이터를 업데이트(댓글추가) 하여 context를 업데이트 한다
  const updatePost = newRecomment => {
    console.log('updatePost');
    recomment.push(newRecomment);
    let tempPost = posts;
    tempPost[postId].comment[commentId] = recomment;
    setPosts([...tempPost]);
    console.log(tempPost[postId].comment[commentId].recomment);
  };

  const toggleMenu = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Container>
        {isWriter ? (
          <MyCommentMenu
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            setIsWriter={setIsWriter}
            isWriter={isWriter}
          />
        ) : (
          <OtherCommentMenu
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            setIsWriter={setIsWriter}
            isWriter={isWriter}
          />
        )}

        <ContentWrapper>
          <TopWrapper>
            <WriterWrapper>
              <Writer>{nickname}</Writer>
              {writer ? <WriterBadge /> : null}
            </WriterWrapper>
            <DotMenuWrapper onPress={toggleMenu}>
              <DotMenu />
            </DotMenuWrapper>
          </TopWrapper>
          <CommentText>{mainText}</CommentText>
        </ContentWrapper>
        <BottomWrapper>
          <DaysAgo>{elapsedTime}</DaysAgo>
          <AddCommentWrapper>
            <AddCommentForComment>답글쓰기</AddCommentForComment>
          </AddCommentWrapper>
        </BottomWrapper>
      </Container>
      {recomment.length > 1 ? (
        moreClicked ? (
          recomment.map((recomment, i, array) => {
            if (i + 1 === array.length) {
              return (
                <>
                  <ReComment key={recomment.recommentId} item={recomment} />
                  <ReCommentTextInput key={-1} />
                </>
              );
            } else
              return <ReComment key={recomment.recommentId} item={recomment} />;
          })
        ) : (
          <>
            <ReComment key={recomment.recommentId} item={recomment[0]} />
            <MoreButtonWrapper
              onPress={() => {
                setMoreClicked(true);
              }}>
              <Line />
              <MoreButtonText>
                답글 {recomment.length - 1}개 더 보기
              </MoreButtonText>
            </MoreButtonWrapper>
          </>
        )
      ) : recomment.length == 0 ? null : (
        <>
          <ReComment key={recomment.recommentId} item={recomment[0]} />
          <ReCommentTextInput
            onSubmitEditing={SubmitEditingHandler}
            onChangeText={onChangeInputHandler}
          />
        </>
      )}
    </>
  );
};
