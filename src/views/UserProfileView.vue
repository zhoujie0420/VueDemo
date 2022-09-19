<template>
    <ContentBase>
      <div class="row" >
      <div class = 'col-3'>
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user= "user"/>
        <UserProfileWrite />
      </div>
      <div class = 'col-9'>
        <UserProfilePosts :posts = "posts"/>
      </div>
    </div>
    </ContentBase>
  </template>
  
  <script>
  import ContentBase from '../components/ContentBase';
  import UserProfileInfo from '../components/UserProfileInfo';
  import UserProfilePosts from '../components/UserProfilePosts';
  import UserProfileWrite from '../components/UserProfileWrite';
  import { reactive } from 'vue';
  export default {
    name: 'Userprofile',
    components : {
      ContentBase,
      UserProfileInfo,
      UserProfilePosts,
      UserProfileWrite,
},
setup(){
  const user = reactive({
    id : 1,
    username : "Zhoujie",
    lastName :'Zhou',
    firstName :'Jie',
    followerCount : 1,
    is_followed: false,
  });

  const posts = reactive({
    count :3,
    posts:[
      {
        id :1,
        userId :1,
        context : "1",
      },
      {
        id :2,
        userId :2,
        context : "2",
      },
      {
        id :3,
        userId :3,
        context : "3",
      },
    ]
  });


  const follow = () =>{
    if(user.is_followed) return;
    user.is_followed = true;
    user.followerCount++;
  }

  const unfollow = () =>{
    if(!user.is_followed) return;
    user.is_followed = false;
    user.followerCount--;
  }
  return{
    user,
    follow,
    unfollow,
    posts,
  }
}
  }
  </script>
  
  
  <style scoped>
  
  </style>