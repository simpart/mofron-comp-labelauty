/**
 * @file mofron-comp-labelauty/index.js
 * @brief component module template for developper
 * @license MIT
 */
const Radio = require("mofron-comp-radio");
require('expose-loader?exposes=jQuery!jquery');
require("labelauty");

module.exports = class extends Radio {
    /**
     * initialize component
     * 
     * @param (mixed) string: label text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Labelauty");
          
	    /* init config */
	    this.confmng().add('padding', { type:'size', init:'0.1rem' });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    this.childDom().attrs({ "data-labelauty" : " " });
	    this.text().style({
	        "margin-top":    "auto",
		"margin-bottom": "auto",
		"margin-left":   "0.1rem"
	    });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    beforeRender () {
        try {
            super.beforeRender();
            this.m_style_buf = this.style();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    afterRender () {
        try {
            super.afterRender();
            jQuery('#' + this.childDom().id()).labelauty({
                label: false,
            });
            this.styleDom(this.styleDom().parent());

            this.style(this.m_style_buf);
            this.styleDom().getRawDom().childNodes[1].style['padding'] = this.padding();

	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    padding (prm) {
        try {
            return this.confmng('padding', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
