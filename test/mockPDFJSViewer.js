function DefaultTextLayerFactory() {}
DefaultTextLayerFactory.prototype.createTextLayerBuilder = function() {
  return {
    setTextContent: function() {},
    render: function() {}
  };
};

export default function mockPDFJSViewer() {
  return {
    DefaultTextLayerFactory
  };
};
