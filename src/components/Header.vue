<script>
  import { RouterLink } from 'vue-router'
  export default {
    name: 'Header',
    data() {
      return {
        nav_list: [
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'About',
            link: '#about'
          },
          {
            name: 'Projects',
            link: '#projects'
          },
          {
            name: 'contact',
            link: '#contact'
          }
        ],
        isOpen: false,
      }
    },
  }
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <a href="/">
        <span class="jeck">jeck<span>.</span><span class="dev">dev</span></span>
      </a>
    </div>

    <div>
      <!-- OPEN MENU -->
      <button class="header__button" aria-label="hamburger-menu" @click="isOpen = true" v-if="!isOpen">
        <i class="fa-solid fa-bars"></i>
      </button>
      <!-- CLOSE MENU -->
      <button class="header__button" aria-label="close-hamburger-menu" @click="isOpen = false" v-else>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <nav 
      class="header__nav" 
      :class="{ open: isOpen }"
      >
      <ul class="header__list">
        <li class="header__item" v-for="nav in nav_list" :key="nav.name">
          <a :href="nav.link">{{ nav.name }}</a>
        </li>
      </ul>
    </nav>
  </header>

</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: rem(16);

    &__logo {
      font-size: clampf(24, 375, 899, 32);
      .jeck {
        color: white;
      }

      .dev {
        color: $link;
      }
    }

    &__button {
      width: rem(32);
      background-color: transparent;

      i {
        color: white;
        font-size: rem(24);
      }
    }

    &__nav {
      position: absolute;
      right: -100%;
      top: 100%;
      background-color: #444;
      padding: rem(32);
      width: 30%;
      overflow: hidden;
    }

    &__list {
      display: flex;
      align-items: end;
      justify-content: center;
      flex-direction: column;
    }

    &__item {
      &:not(:last-child) {
        padding-bottom: rem(16);
      }
    }
  }
</style>