defineClass('LGMainViewController', {
  navProfileBtnClicked: function() {
//    if (require('LGAccountManager').instance().isLogin == false) {
//        require('LGAccountManager').showSignInAlert();
//        return;
//    }
//    var ctr = require('LGProfileViewController').alloc().init()
//    self.navigationController().pushViewController_animated(ctr, YES)
            
           var alert = require('UIAlertController').alertControllerWithTitle_message_preferredStyle('Alert', 'hehehe', 1);
           require('FQWindowUtility').currentViewController().presentViewController_animated_completion(alert, true, null);
  }
})
