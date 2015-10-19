
angular.module('dpeip').controller('addfeeCtrl', function ($rootScope,$scope, $state) {
  $scope.greet = "添加费用清单";
  //返回上一级
  $scope.goback = function () {
    $state.go('/feelist');
  };
  
  var vm = $scope.vm = {
    show_error: false,
    show_type: 3,
    fee: {}
  };
  vm.change_show_type = function (form) {
    if (vm.show_type == 3) {
      vm.show_error = true;
    } else {
      vm.show_error = false;
    }
  };
    
  //模拟数据
  vm.subjects = [
    {
      label: '预算科目1',
      style: [
        {
          label: '科目1费用类型A',
        },
        {
          label: '科目1费用类型B',
        }
      ]
    },
    {
      label: '预算科目2',
      style: [
        {
          label: '科目2费用类型A',

        },
        {
          label: '科目2费用类型B',
        },
        {
          label: '科目2费用类型C'
        }
      ]
    },
    {
      label: '预算科目3',
      style: [
        {
          label: '科目3费用类型A',

        },
        {
          label: '科目3费用类型B',
        },
        {
          label: '科目3费用类型C'
        }
      ]
    }
  ];
  //默认选项
  vm.fee.subject = vm.subjects[0];
  // 更换时清空子选单
  $scope.$watch('vm.fee.subject', function (subject) {
    vm.fee.feestyle = vm.fee.subject.style[0];
  }); 
  
  //保存事件
  vm.save = function (fee_form) {
    vm.show_error = true;
    //fee_form.PositionError();
    if (fee_form.$valid) {
      var cachedata = {
        "num": vm.fee.num,
        "subject": vm.fee.subject["label"],
        "style": vm.fee.feestyle["label"],
        "userfor": vm.fee.usefor,
        "datetime": vm.fee.datetime,
        "money": vm.fee.money
      };
      console.log(cachedata);
      if($rootScope.fees === undefined){
        $rootScope.fees = [];
        $rootScope.fees.push(cachedata);
      }else{
        $rootScope.fees.push(cachedata);
      }
      alert("保存");
      $state.go('/feelist');
    }

  };

  //日期控件初始化
  var mindate = new Date(2015, 10, 9, 9, 22),
      maxdate = new Date(2015, 11, 11, 9, 22);
  var opt = {};
  opt.defaults = {
    theme: 'android-ics light', //皮肤样式
    display: 'modal', //显示方式 
    mode: 'scroller', //日期选择模式
    onSelect: function (text, ins) {
      $scope.selettime = text;
      $scope.$apply();//刷新数据	
      //alert($scope.selettime);
    }

  };
  opt.datetime = {
    preset: 'datetime',
    minDate: mindate,
    maxDate: maxdate,
    stepMinute: 5,
  };


  var optDateTime = $.extend(opt['datetime'], opt['defaults']);

  $("#daytime").mobiscroll(optDateTime).datetime(optDateTime);
  $("#daytime").val = new Date();
  
  //默认值
  $scope.selettime = new Date();
  $scope.$watch('selettime', function (value) {
    console.log(value);
  });


});