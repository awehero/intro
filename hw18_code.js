clear all
close all
clc
prettyGraphs();

%% Homework 18
% 8.1

% Stress Calculations
loads = [0, 1.5, 4.6, 8, 11, 11.8, 11.8, 12, 16.6, 20, 21.5, 19.5, 18.5];
diameter = 0.503;
area = pi*((diameter/2)^2);
stresses = loads/area;

% Strain Calculations
elongs = [0, 0.0005, 0.0015, 0.0025, 0.0035, 0.005, 0.008, 0.02, 0.04,...
    0.1, 0.28, 0.4, 0.46];
strains = elongs/2;

% First Plot
figure(1);
subplot(2, 1, 1);
plot(strains, stresses,"o");
title("Stress-Strain Graph");
axis([0, 0.25, 0, 120]);
xlabel("Strain (in/in)");
ylabel("Stress (kip)");
xticks(0:0.025:0.25);
yticks(0:25:120);

% Second Plot
figure(1);
subplot(2, 1, 2);
plot(strains, stresses,"o");
title("Stress-Strain Graph (Expanded)");
axis([0, 0.004, 0, 75]);
xlabel("Strain (in/in)");
ylabel("Stress (kip)");
xticks(0:0.0004:0.004);
yticks(0:20:75);
