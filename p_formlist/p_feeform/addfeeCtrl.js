hys.controller('addfeeCtrl', function ($scope, $state) {
    $scope.greet = "添加费用清单";
    
    $scope.return = function () {
        $state.go('/feelist');
    }
    
    
    
    var mindate = new Date(2015, 10, 9, 9, 22),
        maxdate = new Date(2015, 11, 11, 9, 22);
    var opt = {};
    opt.default = {
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
        stepMinute: 5
    };


    var optDateTime = $.extend(opt['datetime'], opt['default']);

    $("#starttime").mobiscroll(optDateTime).datetime(optDateTime);
    $("#endtime").mobiscroll(optDateTime).datetime(optDateTime);
    
    //默认值
    $scope.selettime = new Date();
    $scope.$watch('selettime', function (value) {
        console.log(value);
    })
    var listDetail = [];
    var getObj = function (id) {
        return id ? document.getElementById(id).innerHTML : id + "未找到";
    }
    $scope.save = function () {

        var cachedata = {
            "starttime": $scope.starttime,
            "endtime": $scope.endtime,
            "startpath": getObj("startpath"),
            "endpath": getObj("endpath"),
            "tranway": getObj("tranway"),
            "stayway": getObj("stayway")
        };
        listDetail.push(cachedata);
        alert("保存");
    }
});