/*!
 * NavScroll.js
 * Version: 1.2.0
 * Author: Jeroen Hammann
 *
 * Copyright (c) 2014 Jeroen Hammann
 * Released under the MIT license
*/

;(function ($, window, document, undefined) {
  'use strict';

  var pluginName = 'navScroll',
      defaults = {
        // The time it takes to scroll to the element (set this to 0 so it obviously won't show an animation).
        //这个是滚动的时间
        scrollTime: 500,
        // The class of the items which invokes the scroll animation. All anchor tags inside the element are clickable when the value is empty.
        //调用滚动动画的项的类。当值为空时，元素内的所有锚标记都可以单击。
        navItemClassName: '',
        // Set the height of the navigation (to use as offset). 'auto' let's the plugin determine the height automatically, a number determines the height in px.
        //设置导航的高度(用作偏移量)。“自动”让插件自动决定高度
        navHeight: 'auto',
        // If your navigation hides and is used as a dropdown on small screens setting this to true hides the dropdown after a click.
        mobileDropdown: false,
        // Additionaly you can insert the mobile nav's classname here, when left empty the plugin searches for a <ul> in the same parent element.
        //可以再一个父元素的添加一个类名
        mobileDropdownClassName: '',
        // The window width, which functions as a breakpoint between desktop and mobile.
        //窗口宽度，它是桌面和移动之间的断点。
        mobileBreakpoint: 1024,
       
        // Set to 'true' if you want to enable scrollspy.
        scrollSpy: false
      };

  function NavScroll(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  NavScroll.prototype = {
    init: function() {
      var self, options, element, navItem, navOffset, scrollTime;
      self = this;
      options = self.options;
      element = self.element;

      if (options.navItemClassName === '') {
        navItem = $(element).find('a');
      } else {
        navItem = $(element).find('.' + options.navItemClassName);
      }

      if (options.navHeight === 'auto') {
        navOffset = $(element).height();
      } else if (isNaN(options.navHeight)) {
        throw new Error ('\'navHeight\' only accepts \'auto\' or a number as value.');
      } else {
        navOffset = options.navHeight;
      }

      navItem.on('click', function(e){
        var url, parts, target, targetOffset, targetTop;

        url = this.href;
        parts = url.split('#');
        target = parts[1];

        if (target !== undefined) {
          e.preventDefault();
          targetOffset = $('#' + target).offset();
          targetTop = targetOffset.top;
        }

        if ($(this).data('scrolltime') !== undefined) {
          scrollTime = $(this).data('scrolltime');
        } else {
          scrollTime = options.scrollTime;
        }

        if (options.mobileDropdown && $(window).width() >= 0 && $(window).width() <= options.mobileBreakpoint) {
          if (options.mobileDropdownClassName === '') {
            $(element).find('wrap_layer').slideUp('fast');
          } else {
            $('.' + options.mobileDropdownClassName).slideUp('fast');
          }
        }

        $('html, body').stop().animate({
          scrollTop: targetTop - navOffset
        }, scrollTime);
      });

      if (options.scrollSpy) {
        var scrollItems;
        scrollItems = [];

        navItem.each(function() {
          var scrollItemId = $(this).attr('href');
          scrollItems.push($(scrollItemId));
        });

        $(window).on('scroll', function () {
          self.scrollspy(navItem, scrollItems);
        });
        self.scrollspy(navItem, scrollItems);
      }
    },

    scrollspy: function(navItem, scrollItems) {
      var scrollPos, changeBounds, i, l;
      scrollPos = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//  changeBounds = window.innerHeight / 2 || document.documentElement.clientHeight / 2;
      l = navItem.length;

      for (i = 0; l > i; i++) {
        var item = scrollItems[i];
        if (scrollPos > (item.offset().top-60)) {
          navItem.removeClass('active');
          $(navItem[i]).addClass('active');
        }
      }
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
        new NavScroll(this, options));
      }
    });
  };

})(jQuery, window, document);