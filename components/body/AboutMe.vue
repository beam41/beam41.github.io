<template>
  <p class="about">
    My name is Phumdol Lookthipnapha, a software engineer based in Chiang Mai,
    Thailand. I have experience in full-stack web development.
  </p>
  <div class="contact">
    <div class="em">
      <SvgEmail />
      <span>phumdol.l@gmail.com</span>
    </div>
    <a
      class="li"
      href="https://www.linkedin.com/in/phumdol/"
      target="_blank"
      rel="noopener"
    >
      <SvgLinkedin />
      <span>Phumdol Lookthipnapha</span>
    </a>
    <a
      class="gh"
      href="https://github.com/beam41/"
      target="_blank"
      rel="noopener"
    >
      <SvgGithub />
      <span>beam41</span>
    </a>
    <a
      class="gl"
      href="https://gitlab.com/beam41"
      target="_blank"
      rel="noopener"
    >
      <SvgGitlab />
      <span>beam41</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin: 0 0 24px;
}

.contact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
  gap: 8px;
  margin: 0 64px;

  & > a:hover {
    color: white;
    transition: background 0s;
  }

  & > * {
    border-radius: 4px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(74, 74, 74);
    text-decoration: none;
    transition: background 250ms ease-in-out;
    font-size: 0.9em;

    &.em {
      background: rgba(black, 0.05);
    }

    &.li {
      background: rgba(rgb(0, 119, 183), 0.05);
      &:hover {
        background: rgba(rgb(0, 119, 183), 1);
      }
    }

    &.gh {
      background: rgba(rgb(20, 25, 30), 0.05);
      &:hover {
        background: rgba(rgb(20, 25, 30), 1);
      }
    }

    &.gl {
      background: rgba(#f96424, 0.05);
      &:hover {
        background: rgba(#f96424, 1);
      }
    }
    svg {
      width: 24px;
      height: 24px;
      margin-top: -2px;
      margin-right: 4px;
    }
  }

  & > a {
    user-select: none;
  }
}
</style>
