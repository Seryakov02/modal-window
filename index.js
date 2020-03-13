const modal = $.modal({
  title: "",
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
  `,
  width: "",
  footerButtons: [
    {
      text: "Ok",
      type: "primary",
      handler() {
        modal.close();
      }
    },
    {
      text: "Cancel",
      type: "danger",
      handler() {
        modal.close();
      }
    }
  ]
});
