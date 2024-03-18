<template>
  <header class="site-header">
    <div class="site-identity">
      <h1><NuxtLink to="/">OSass</NuxtLink></h1>
    </div>
    <nav class="site-navigation">
      <ul class="nav">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="right">
      <div class="site-user">
        <div class="site-user__avatar">
          <img src="/static/img/avatar_1.jpg" alt="avatar" />
        </div>
        {{ userData.username }}
      </div>

      <div class="logout" @click="logout">
        <Logout />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logout from "assets/icons/log-out.svg";
const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/news",
    label: "News",
  },
  {
    to: "/contacts",
    label: "Contact",
  },
];

const { data: userData, signOut } = useAuth();

const logout = () => {
  signOut({ callbackUrl: "/login", external: true });
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: $primary-color-2;
}

span {
  color: #111111;
  cursor: pointer;
}
.site-header {
  border-bottom: 1px solid #ccc;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
}

.site-identity h1 {
  font-size: 1.5em;
  margin: 0.6em 0;
  display: inline-block;
}

.site-navigation ul,
.site-navigation li {
  margin: 0;
  padding: 0;
}

.site-navigation li {
  display: inline-block;
  margin: 1.4em 1em 1em 1em;
}

.site-user {
  @include flex(column, 8, center, center);

  &__avatar {
    @include circle(50, 50, transparent);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.right {
  @include flex(row, 20, center, center);

  .logout {
    cursor: pointer;
    @include flex(row, 20, center, center);
    @include box(50, 50, $bg);
    border-radius: 10px;
    svg {
      width: 30px;
      height: 30px;
      color: $red-1;
    }
  }
}
</style>
