const { Transformer } = require("@parcel/plugin")
const Handlebars  = require("handlebars");

const transformer = new Transformer({
  async transform({ asset }) {
    const content = await asset.getCode();
    const precompiled = Handlebars.precompile(content);
    asset.setCode(`
    import Handlebars from 'handlebars';
    const templateFunction = Handlebars.template(${precompiled});
    export default templateFunction`)
    asset.type = "js"
    return [asset];
  },
});

module.exports = transformer;
