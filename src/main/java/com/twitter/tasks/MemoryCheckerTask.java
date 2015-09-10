package com.twitter.tasks;

import com.twitter.processinglogic.TweetProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

/**
 * Created by ivsi on 9/5/2015.
 */
public class MemoryCheckerTask {

    private TweetProcessor tweetProcessor;

    public static final long MEMORY_CLEAR_INTERVAL_IN_MSEC = 300000;

    @Autowired
    public MemoryCheckerTask(TweetProcessor tweetProcessor) {
        this.tweetProcessor = tweetProcessor;
    }

    @Scheduled(fixedRate = MEMORY_CLEAR_INTERVAL_IN_MSEC)
    public void freeMemory() {
        tweetProcessor.clearMemory();
        System.out.println("Memory cleared");
    }
}
