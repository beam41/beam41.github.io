<template>
  <footer class="footer">
    <div class="screen name">@beam41</div>
    <a
      class="screen source"
      href="https://github.com/beam41/beam41.github.io"
      rel="noopener"
      target="_blank"
      >source code</a
    >
    <div class="print">Written in HTML</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  font-size: 0.8em;
  width: 100%;
  padding: 16px 0;
  background: rgb(33, 33, 33);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .name {
    margin-bottom: 8px;
  }

  .source {
    color: white;
    transition: text-decoration-color 0.25s;
    text-decoration-color: rgb(33, 33, 33);

    &:hover {
      text-decoration-color: white;
      transition: text-decoration-color 0s;
    }
  }
}

.print {
  display: none;
}

@media print {
  .screen {
    display: none;
  }

  .print {
    display: initial;
  }

  .footer {
    position: absolute;
    bottom: 0;
  }
}
</style>
