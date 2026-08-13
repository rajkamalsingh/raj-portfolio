export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  approach: string[];
  results: string[];
  reflection: string;
  tech: string[];
  repo: string;
  repoLabel?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "lstm-stock-price-prediction",
    title: "Stock Price Prediction Using LSTM",
    subtitle: "Time-series forecasting with engineered technical indicators",
    summary:
      "An end-to-end LSTM forecasting pipeline enriched with technical indicators (RSI, MACD, SMA) and news sentiment as an auxiliary signal, deployed as a production-style prediction API with automated daily retraining.",
    problem:
      "Stock price movement is notoriously hard to predict from raw historical prices alone — a lot of naive forecasting models effectively just lag the actual price by one time step and call it a prediction. The goal was to build something that goes beyond that: using engineered technical indicators and news sentiment as auxiliary signals, then packaging the model as something that could actually run in production rather than live in a notebook.",
    approach: [
      "Engineered technical indicators (RSI, MACD, SMA) from raw OHLC price data to give the model explicit momentum and trend signals, rather than relying on raw prices alone.",
      "Incorporated news sentiment as an auxiliary input signal alongside price-based features.",
      "Trained an LSTM network in TensorFlow across multiple stock tickers, using cross-validation to avoid overfitting to any single ticker's idiosyncrasies.",
      "Wrapped the trained model in a FastAPI prediction service, containerized with Docker, and deployed to AWS EC2 with a cron-based pipeline for automated daily retraining.",
    ],
    results: [
      "15% improvement in prediction accuracy over baseline models.",
      "MAE of 1.73 and RMSE of 2.91 on held-out test data across multiple tickers.",
      "100% reduction in manual maintenance through automated, cron-based daily retraining.",
    ],
    reflection:
      "The biggest lesson was that feature engineering mattered more than model architecture tweaks — the jump from raw prices to indicator-based features moved the needle more than any change to the LSTM itself. If I revisited this, I'd backtest the model against an actual trading strategy rather than point-accuracy metrics alone, since a lower MAE doesn't always translate into profitable decisions.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS EC2"],
    repo: "https://github.com/rajkamalsingh/fintech_project",
  },
  {
    id: 2,
    slug: "face-detection-emotion-classification",
    title: "Real-Time Face Detection & Emotion Classification",
    subtitle: "Computer vision & CNN-based inference",
    summary:
      "A real-time computer vision system for face detection and emotion classification using CNNs and OpenCV, optimized for low-latency live inference on streaming video.",
    problem:
      "Real-time video applications need to detect faces and read emotional cues fast enough to feel instantaneous — anything that lags noticeably breaks the experience. The challenge was building a CNN-based classification pipeline that could keep up with live video, not just perform well on static test images.",
    approach: [
      "Used OpenCV for face detection on incoming video frames, isolating face regions before classification.",
      "Trained a CNN-based emotion classifier with Keras on labeled facial expression data.",
      "Optimized the inference pipeline specifically for low-latency, frame-by-frame processing rather than batch prediction, since the target use case was live video.",
      "Containerized the pipeline with Docker for consistent deployment across environments.",
    ],
    results: [
      "Real-time inference on live video streams.",
      "Pipeline optimized specifically for low-latency frame-by-frame processing rather than offline batch analysis.",
    ],
    reflection:
      "This project was as much about systems engineering as machine learning — getting a model that performs well in a notebook to actually run fast enough for live video required real profiling and optimization work, not just training a better model.",
    tech: ["Python", "Keras", "OpenCV", "Docker"],
    repo: "https://github.com/rajkamalsingh",
    repoLabel: "GitHub Profile (repo link coming soon)",
  },
  {
    id: 3,
    slug: "bitcoin-anomaly-detection",
    title: "Real-Time Bitcoin Anomaly Detection",
    subtitle: "Streaming ETL + Isolation Forest on AWS",
    summary:
      "A real-time streaming ETL pipeline (Kinesis Streams + Apache Flink + Lambda) processing 10K+ records/day with sub-second detection latency, using an Isolation Forest model for anomaly scoring with SNS-based alerting, visualized through an S3 + Athena + QuickSight analytics layer.",
    problem:
      "Cryptocurrency markets move fast and generate huge volumes of tick data — flagging anomalous price or volume behavior only matters if it happens in near real time. The goal was a pipeline that could ingest and process thousands of records a day with sub-second detection latency, without relying on brittle manual thresholds.",
    approach: [
      "Architected a streaming ETL pipeline on AWS using Kinesis Streams to ingest live data, Apache Flink for stream processing, and Lambda for serverless compute.",
      "Trained an Isolation Forest model to score incoming data points for anomalousness, replacing simple fixed-threshold rules.",
      "Wired up SNS-based alerting so anomalies trigger notifications automatically rather than requiring manual monitoring.",
      "Built an analytics layer on S3 + Athena + QuickSight for historical and real-time visualization of flagged anomalies.",
    ],
    results: [
      "Processed 10K+ records/day with sub-second anomaly detection latency.",
      "~30% precision improvement over statistical threshold baselines.",
      "60% reduction in manual monitoring effort.",
    ],
    reflection:
      "Moving from a statistical threshold baseline to a learned Isolation Forest model was the single biggest improvement — thresholds are brittle and need constant re-tuning as market volatility shifts, while the model adapts to the shape of 'normal' data automatically.",
    tech: ["AWS Kinesis", "Apache Flink", "Lambda", "Isolation Forest"],
    repo: "https://github.com/rajkamalsingh",
    repoLabel: "GitHub Profile (repo link coming soon)",
  },
  {
    id: 4,
    slug: "rag-based-qa-system",
    title: "RAG-Based QA System",
    subtitle: "Fine-tuned FLAN-T5 at 4,000× data scale",
    summary:
      "Scaled a generative question-answering pipeline from a 20-example custom FAQ dataset to 87K+ SQuAD-style examples, fine-tuning FLAN-T5 with Hugging Face Transformers using mixed-precision training, and deploying an interactive Gradio inference app.",
    problem:
      "Small, custom FAQ datasets aren't enough to fine-tune a generative model that generalizes well. The goal was to see how far a QA system could be pushed by scaling training data aggressively, then package the result as something people could actually query.",
    approach: [
      "Started from a 20-example custom FAQ dataset and scaled it to 87K+ examples using SQuAD v1.1 — a 4,000× increase in training data.",
      "Fine-tuned FLAN-T5 (80M to 250M parameter variants) using Hugging Face Transformers, with custom prompt formatting and batched tokenization.",
      "Used mixed-precision (FP16) training and validation monitoring via Seq2SeqTrainer to keep experimentation fast and reproducible.",
      "Built and deployed an interactive Gradio inference UI, and architected the system with future LoRA-based parameter-efficient fine-tuning in mind.",
    ],
    results: [
      "Scaled training data 4,000× — from 20 examples to 87K+.",
      "Fine-tuned and compared FLAN-T5 variants from 80M to 250M parameters.",
      "Shipped a working, interactive Gradio QA interface.",
    ],
    reflection:
      "The scale jump from 20 to 87K examples was the real experiment here — it's easy to assume more data always helps, but tracking validation performance across that scale-up taught me where the returns started diminishing for a model this size.",
    tech: ["Python", "Hugging Face", "FLAN-T5", "Gradio"],
    repo: "https://github.com/rajkamalsingh/llm-rag-basics",
  },
  {
    id: 5,
    slug: "food-context-classification",
    title: "Food Context Classification via Transfer Learning",
    subtitle: "ResNet-50 · home vs. restaurant vs. packaged food",
    summary:
      "Studied how a pretrained ResNet-50 classifies food images by scene context — home, restaurant, or packaged — rather than by the food itself, then compared four training strategies (baseline, augmentation, synthetic noise, and combined) to see which actually helped.",
    problem:
      "Most food-image classifiers try to identify what the food is. This project asked a different question: can a model reliably classify the context a food photo was taken in — at home, in a restaurant, or as packaged goods — using scene cues rather than the dish itself?",
    approach: [
      "Fine-tuned a pretrained ResNet-50 on a food-context dataset labeled by scene (home, restaurant, packaged) rather than by dish.",
      "Ran four separate training strategies — baseline transfer learning, standard data augmentation, injected synthetic noise, and a combined approach — to isolate which techniques actually helped.",
      "Evaluated all four strategies on a held-out test set using consistent metrics for a fair, controlled comparison.",
    ],
    results: [
      "94.52% test accuracy with the plain baseline transfer-learning model.",
      "The baseline outperformed every augmented variant — augmentation and synthetic noise did not improve results on this dataset.",
    ],
    reflection:
      "The most useful finding was a negative one: none of the augmentation strategies beat the plain baseline. It's a good reminder that more complexity in a training pipeline isn't automatically better — augmentation choices need to be validated against your specific dataset, not assumed to help.",
    tech: ["PyTorch", "ResNet-50", "Transfer Learning"],
    repo: "https://github.com/rajkamalsingh/food_context_classification",
  },
  {
    id: 6,
    slug: "lane-detection",
    title: "Real-World Lane Detection",
    subtitle: "Classical computer vision under adverse conditions",
    summary:
      "Built a classical edge-based lane detection pipeline (Canny + Hough transform) and stress-tested it against shadows, motion blur, and bright light, then improved robustness with adaptive thresholds, histogram equalization, and slope filtering.",
    problem:
      "Classical lane-detection pipelines built on edge detection tend to work well in demo conditions and fall apart in the real world — shadows, motion blur, and harsh lighting all break fixed-threshold approaches. The goal was to deliberately stress-test a pipeline against those conditions rather than only evaluate it on clean footage.",
    approach: [
      "Built a classical computer vision pipeline using Canny edge detection and Hough transform to identify lane lines from road images.",
      "Deliberately stress-tested the pipeline against adverse conditions — shadows, motion blur, and bright/overexposed lighting — rather than only clean, ideal frames.",
      "Improved robustness with adaptive thresholding (replacing fixed thresholds), histogram equalization for lighting normalization, and slope filtering to reject spurious edge detections.",
    ],
    results: [
      "Adaptive-threshold pipeline reduced false lane detections compared to the fixed-threshold baseline.",
      "Maintained detection reliability across shadow, motion-blur, and bright-light test conditions.",
    ],
    reflection:
      "Classical CV techniques like Canny and Hough are fast and interpretable, but this project made clear how fragile fixed-threshold approaches are outside ideal lighting. Adaptive thresholding closed a lot of that gap without needing to reach for a deep-learning-based approach.",
    tech: ["Python", "OpenCV", "Canny/Hough"],
    repo: "https://github.com/rajkamalsingh/llm-rag-basics/tree/main/lane_detection_project",
  },
  {
    id: 7,
    slug: "sp500-fundamentals-analytics",
    title: "S&P 500 Fundamentals Analytics",
    subtitle: "Cross-sector valuation & volatility study",
    summary:
      "A statistical analysis of S&P 500 company fundamentals — EPS, P/E, P/B, dividends, and volatility — exploring correlations between valuation metrics and how they vary across sectors.",
    problem:
      "Company fundamentals like EPS, P/E, and P/B are widely used for valuation, but their relationships to each other and to sector context aren't always intuitive. This project set out to quantify those relationships across the full S&P 500 rather than rely on rules of thumb.",
    approach: [
      "Collected and cleaned fundamentals data (EPS, P/E, P/B, dividends, volatility) across S&P 500 constituents.",
      "Ran correlation analysis between valuation metrics — including EPS vs. market cap and P/E vs. EPS — to surface which relationships actually hold across the index.",
      "Broke results down by sector to see how valuation relationships shift across industries, rather than treating the S&P 500 as one homogeneous group.",
      "Visualized findings with Matplotlib scatter and correlation plots for interpretability.",
    ],
    results: [
      "Surfaced sector-level differences in how valuation metrics correlate with each other.",
      "Showed that relationships holding for one sector don't necessarily hold across the index as a whole.",
    ],
    reflection:
      "This project was a reminder that treating an index like the S&P 500 as one uniform group hides a lot of signal — the same valuation relationship can look completely different once you slice by sector.",
    tech: ["Python", "Pandas", "Matplotlib"],
    repo: "https://github.com/rajkamalsingh/Data_analytics",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}