requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        function Canvas(dom) {
            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#9D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            var padding = 10;

            var R = 150;

            var size = padding * 2 + R * 2;

            var center = size / 2;

            var paper = Raphael(dom, size, size);

            var arc;

            var attrShadow = {"stroke": colorBlue4, "fill": colorBlue1, "stroke-width": 3};
            var attrLine = {"stroke": colorBlue4, "stroke-width": 2};
            var attrRem = {"stroke": colorBlue4, "stroke-width": 3, "fill": colorOrange1};

            this.draw = function (parts) {
                paper.circle(size / 2, size / 2, R).attr(attrShadow);
                for (var i = 0; i < parts.length; i++) {
                    var p = parts[i];
                    var angle = 2 * Math.PI * p[0] / p[1];
                    paper.path([
                        ["M", center, center],
                        ["L", center + Math.sin(angle) * R, center - Math.cos(angle) * R]
                    ]).attr(attrLine);
                }
                paper.path([
                    ["M", center, center],
                    ["L", center, padding],
                    ["A", R, R, 0, angle > Math.PI ? 1 : 0, 1, center + Math.sin(angle) * R, center - Math.cos(angle) * R],
                    ["z"]
                ]).attr(attrRem);

            };
        }

        var io = new extIO({
            animation: function($expl, data){
                if (!data.ext || !data.ext.explanation){
                    return;
                }
                var canvas = new Canvas($expl[0]);
                canvas.draw(data.ext.explanation);
            },
            functions: {
                js: 'dividePie',
                python: 'divide_pie'
            }
        });
        io.start();
    }
);
