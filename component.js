AstroComponent = class {
  constructor() {
    this._eventHandler = $({});
  }

  /**
   * Attaches a callback to StreamWords call
   * @param  {String}   name Event name
   * @param  {Function} fn   Callback
   * @return {Boolean}  True
   */
  on(name, fn){
    this._eventHandler.on(name, fn);

    return true;
  }

  /**
   * Triggers a previously attached callback
   * @param  {String} name [description]
   * @return {Any}      Return of callback
   */
  trigger(name, data){
    return this._eventHandler.trigger(name, data);
  }
};
