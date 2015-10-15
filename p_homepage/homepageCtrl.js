hys.controller('homepageCtrl', function ($scope, $state) {
    $scope.greet = "导航界面";

    $scope.gotime = function () {
        $state.go('/application');
    };

    var opt = {};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式 
        mode: 'scroller', //日期选择模式
        lang: 'zh',
        //startYear: currYear - 10, //开始年份
        //endYear: currYear + 10,//结束年份
        onSelect:function(text,ins){ 
            $scope.selettime = text;
            $scope.$apply();//刷新数据	
                //alert($scope.selettime);
          }
        
    };
    opt.datetime = {
        preset: 'datetime',
        minDate: new Date(2012, 3, 10, 9, 22),
        maxDate: new Date(2014, 7, 30, 15, 44),
        stepMinute: 5
    };
    

    var optDateTime = $.extend(opt['datetime'], opt['default']);
    var optTime = $.extend(opt['time'], opt['default']);
    $("#starttime").mobiscroll(optDateTime).datetime(optDateTime);
    $("#endtime").mobiscroll(optDateTime).datetime(optDateTime);
    
    //默认值
    $scope.selettime = new Date();
    $scope.$watch('selettime',function(value){
        console.log(value);
    })
    

});