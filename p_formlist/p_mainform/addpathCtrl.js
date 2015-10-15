hys.controller('addpathCtrl', function ($scope, $state) {
    $scope.greet = "添加行程";
    var vm = $scope.vm = {
        show_error: false,
        show_type: 3,
        path: {}
    };
    vm.change_show_type = function (form) {
        if (vm.show_type == 3) {
            vm.show_error = true;
        } else {
            vm.show_error = false;
        }
    }

        $scope.return = function () {
            $state.go('/mainlist');
        }

        //选择框数据
        $scope.StayList = [
            { text: "酒店", value: "jiudian" },
            { text: "宿舍", value: "sushe" },
            { text: "自住", value: "zizhu" }
        ];






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
    $("#starttime").val = mindate;
    $("#endtime").val = maxdate;
    //默认值
    $scope.selettime = new Date();
    $scope.$watch('selettime', function (value) {
        console.log(value);
    })
    var listDetail = [];
    var getObj = function (id) {
        return id ? document.getElementById(id).innerText : id + "未找到";
    }
    $scope.Stayway = {
        data: 'jiudian'
    };
    vm.save = function (basic_form) {
        vm.show_error = true;
        basic_form.$setDirty();
        if (basic_form.$valid) {
            alert("提交成功！");
        }
        var cachedata = {
            "starttime": $("#starttime").val(),
            "endtime": $("#endtime").val(),
            "startpath": $("#startpath").val(),
            "endpath": $("#endpath").val(),
            "tranway": $("#tranway").val(),
            "stayway": $scope.Stayway.data
        };
        console.log(cachedata);
        listDetail.push(cachedata);
        alert("保存");
    }
});