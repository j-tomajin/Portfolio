<script>
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
            name: 'Contact',
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
        <li 
          v-for="(nav, index) in nav_list" 
          :key="nav.name"
          class="header__item" 
        >
          <a :href="nav.link" class="header__link">{{ nav.name }}</a>
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
    z-index: 10;

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
      right: 0%;
      top: -300%;
      background-color: #444;
      padding: rem(32);
      width: 100%;
      overflow: hidden;
      z-index: -1;
    }

    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    &__item {

      &:not(:last-child) {
        padding-bottom: rem(16);
      }
    }

    &__link {
      color: white;
    }

    @include breakpointMin(medium-screen) {
      outline: $outline;
      &__button {
        display: none;
      }

      &__nav {
        position: unset;
        background-color: unset;
        padding: 0;
        width: auto;
        overflow: visible;
      }

      &__list {
        align-items: unset;
        flex-direction: row;
        gap: rem(32);
      }

      &__item {
        &:not(:last-child) {
          padding-bottom: 0;
        }
      }

      &__link {
        position: relative;
        z-index: 1;

        &::before {
          content: '';
          display: block;
          width: 0;
          height: 5px;
          background-color: $link;
          margin-inline: auto;

          position: absolute;
          bottom: 1px;
          right: 0;
          left: 0;
          z-index: -1;

          transition: width 300ms ease-out;
        }

        &:hover::before {
          width: 100%;
        }
      }
    }
  }
</style>