package com.cuidarse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Application {

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\marae\\Documents\\EGG-TRABAJOS\\chromedriver-win64\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://maracalla.github.io/RedCuidarse/");
        driver.manage().window().maximize();
        


    }
}
