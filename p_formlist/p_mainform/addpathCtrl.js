angular.module('dpeip').controller('addpathCtrl', function ($rootScope, $scope, $state) {
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

    $scope.goback = function () {
        if ($rootScope.Editem) {
            $rootScope.paths.push($rootScope.Editem);
            $rootScope.Editem = undefined;
        }
        $state.go('/mainlist');
    }

    if ($rootScope.Editem) {
        vm.starttime = $rootScope.Editem["starttime"],
        vm.endtime = $rootScope.Editem["endtime"],
        vm.path.startpath = $rootScope.Editem["startpath"],
        vm.path.endpath = $rootScope.Editem["endpath"],
        vm.tranway = $rootScope.Editem["tranway"],
        vm.stayway = $rootScope.Editem["stayway"]
    }


    //选择框数据
    vm.StayList = [
        { text: "酒店", value: "jiudian" },
        { text: "宿舍", value: "sushe" },
        { text: "自住", value: "zizhu" }
    ];

    // 默认选项
    vm.stayway = {
        text: "酒店",
        value: "jiudian"
    };
    //vm.stayway = vm.StayList[0];

    vm.TranList = [
        {
            code: 'train',
            label: '火车'
        },
        {
            code: 'car',
            label: '汽车'
        },
        {
            code: 'air',
            label: '飞机'
        }
    ];
    //默认值
    vm.tranway = vm.TranList[0];
    
    //时间限制
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
            //alert($scope.selettime+"Ins:"+ins);
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
    //$scope.selettime = new Date();
    $scope.$watch('selettime', function (value) {
        console.log(value);
    })


    vm.dateFlag = true;
    $scope.$watch('vm.endtime', function (value) {
        if (vm.starttime && vm.starttime > vm.endtime) {
            alert("错误");
            vm.dateFlag = false;
        } else {
            vm.dateFlag = true;
        }
        //console.log('vm.endtime'+value);
        
    });
    $scope.$watch('vm.starttime', function (value) {
        if (vm.endtime && vm.starttime > vm.endtime) {
            alert("错误");
            vm.dateFlag = false;
        } else {
            vm.dateFlag = true;
        }
        //console.log('vm.starttime'+value);
        
    });
    
    
    //保存
    vm.save = function (basic_form) {
        vm.show_error = true;
        basic_form.$setDirty();
        if (basic_form.$valid) {
            alert("保存");
            var cachedata = {
                "starttime": vm.starttime,
                "endtime": vm.endtime,
                "startpath": vm.path.startpath,
                "endpath": vm.path.endpath,
                "tranway": vm.tranway,
                "stayway": vm.stayway
            };
            console.log(cachedata);
            if ($rootScope.paths === undefined) {
                $rootScope.paths = [];
                $rootScope.paths.push(cachedata);
            } else {
                $rootScope.paths.push(cachedata);
            }
            $rootScope.Editem = undefined;
            $state.go('/mainlist');

        }

    }
});